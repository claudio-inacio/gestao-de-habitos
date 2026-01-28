import { LoginContext } from "../Providers/Login";
import React, { useContext } from "react";

import { Redirect, Route as CommonRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
    const { token } = useContext(LoginContext)
    return <CommonRoute
        {...rest}
        render={() => {
            return isPrivate === !!token ? <Component /> : <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        }}
    />

}

export default Route