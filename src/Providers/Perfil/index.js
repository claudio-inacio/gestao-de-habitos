import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services"
import { LoginContext } from "../Login";


const profileContext = createContext();

export const UserUpdateProvider = ({ children }) => {
    const { userId, token } = useContext(LoginContext)
    const updatedCount = (data) => {
        api.patch(`/users/${userId}/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((_) => toast.success("Perfil atualizado com sucesso"))
            .catch((err) => console.log(err))
    }

    return (
        <profileContext.Provider value={{ updatedCount }}>
            {children}
        </profileContext.Provider>
    )
}

export const useProfile = () => useContext(profileContext)