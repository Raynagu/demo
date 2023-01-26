import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Authenticate from "./Components/Authenticate";
import { useAuth } from "./Context/AuthProvider";
import { useEffect } from "react";

const App = () => {
    const auth = useAuth();

    useEffect(() => {
        let savedUser = JSON.parse(sessionStorage.getItem("user"));

        if (!auth.user && savedUser) {
            auth.setUser(savedUser);
            // console.log(savedUser);
        }
    }, []);
    return (
        <div className="App">
            <Navigation />
            {/* auth required routes*/}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Authenticate role="test">
                            <Home />
                        </Authenticate>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Authenticate role="test1">
                            <Profile />
                        </Authenticate>
                    }
                />
                {/* open routes */}
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
