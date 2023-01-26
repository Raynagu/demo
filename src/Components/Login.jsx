import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const USERS = [
    { user: "test", password: "test", role: "test" },
    { user: "test1", password: "test1", role: "test1" },
];

const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };
    const loginHandler = (e) => {
        e.preventDefault();

        const data = USERS.find(
            (ele) =>
                ele.user === user.username && ele.password === user.password
        );
        if (data) {
            setError(false);
            auth.login(data);
            // roleNavigate(data.role);
        } else {
            setError(true);
        }
    };

    const roleNavigate = (role) => {
        if (role === "test") {
            navigate("/", { replace: true });
        } else if (role === "test1") {
            navigate("/profile", { replace: true });
        }
    };

    useEffect(() => {
        if (auth.user) {
            roleNavigate(auth.user.role);
        }
    }, [auth.user]);
    // console.log(auth.user);
    return (
        <div>
            {!auth.user ? (
                <form onSubmit={loginHandler}>
                    {error && <p>Wrong username or password</p>}
                    <input
                        type="text"
                        id="username"
                        placeholder="user name"
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={changeHandler}
                    />
                    <button type="submit">Login</button>
                </form>
            ) : null}
        </div>
    );
};

export default Login;
