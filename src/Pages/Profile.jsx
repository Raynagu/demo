import { useAuth } from "../Context/AuthProvider";

const Profile = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            Profile: {user.user} <button onClick={logOut}>logout</button>
        </div>
    );
};

export default Profile;
