import React from "react";
import { Navigate } from "react-router-dom";

const AuthContext = React.createContext();

export function AuthContextContainer({ children }) {
    const [login, setLogin] = React.useState(false);
    const [bearerToken, setBearerToken] = React.useState("");

    return (
        <AuthContext.Provider value={{ login: login, setLogin: setLogin, bearerToken, setBearerToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export function ProtectedRoute({ children }) {
    const { login } = useAuthContext();

    if (!login) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export function useAuthContext() {
    return React.useContext(AuthContext);
}