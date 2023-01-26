import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser(data);
        sessionStorage.setItem("user", JSON.stringify(data));
    };

    const logOut = () => {
        setUser(null);
        sessionStorage.removeItem("user");
    };

    const values = {
        user,
        setUser,
        login,
        logOut,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
