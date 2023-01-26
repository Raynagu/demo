import { useAuth } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const Authenticate = ({ children, role }) => {
    const { user } = useAuth();
    if (!user || user.role !== role) {
        return <Navigate to="/login" />;
    }
    return <div>{children}</div>;
};

export default Authenticate;
