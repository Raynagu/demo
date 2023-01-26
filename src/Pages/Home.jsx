import { useAuth } from "../Context/AuthProvider";

const Home = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            Home - {user.user} <button onClick={logOut}>logout</button>
        </div>
    );
};

export default Home;
