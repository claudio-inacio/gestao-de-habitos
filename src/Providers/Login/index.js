import { createContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  const onSubmitFunction = (data) => {
    setLoadingLogin(true);
    api
      .post("/login", data)
      .then((response) => {
        const { token } = response.data;
        let decode = jwt_decode(token);
        setUserId(decode.user_id);
        localStorage.setItem("@Habitos:userId", decode.user_id);
        setToken(token);
        setAuthenticated(true);
        setLoadingLogin(false);
        return history.push("/dashboard");
      })
      .catch((err) => {
        setLoadingLogin(false);
        toast.error(err.response.data?.message || "Email ou senha Inválidos");
      });
  };

  const logout = () => {
    setToken("");
    localStorage.clear();

    history.push("/login");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Habitos:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <LoginContext.Provider
      value={{
        onSubmitFunction,
        authenticated,
        token,
        logout,
        userId,
        loadingLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
