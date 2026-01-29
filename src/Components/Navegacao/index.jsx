import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Providers/Login";
import { NavigationCustomizer } from "./indexStyle";

import { FiX } from "react-icons/fi";

const Navegation = ({ isOpen }) => {
  const { token, logout } = useContext(LoginContext);

  return (
    <NavigationCustomizer open={isOpen}>
      <ul>
        {!!token ? (
          <>
            <li>
              <Link to="/dashboard">Habitos</Link>
            </li>
            <li>
              <Link to="/explorerGroups">Explorar</Link>
            </li>
            <li>
              <Link to="/userGroups">Meus Grupos</Link>
            </li>
            <li>
              <Link to="/updateUser">Perfil</Link>
            </li>
            <li onClick={logout}>
              <a>Sair </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Cadastro</Link>
            </li>
          </>
        )}
      </ul>
    </NavigationCustomizer>
  );
};

export default Navegation;
