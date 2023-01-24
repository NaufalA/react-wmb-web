import './App.css'
import {Sidebar} from "./components/index.js";
import Routing from "./pages/routing.jsx";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authMiddleware} from "./store/middlewares/index.js";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);

    const location = useLocation();
    const [prevPath] = useState(location.pathname);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn && user) {
            navigate("/", {replace: true})
        } else if (user === undefined) {
            dispatch(authMiddleware.validate()).then((res) => {
                if (res.fulfilled) {
                    navigate(prevPath, {replace: true});
                }
            });
        }
    }, [isLoggedIn, user]);

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            <Sidebar/>
            <Routing/>
        </div>
    )
}

export default App
