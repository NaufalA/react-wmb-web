import './App.css'
import {Sidebar} from "./components/index.js";
import Routing from "./pages/routing.jsx";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery, useQueryClient} from "react-query";
import services from "./services/index.js";
import {AUTH_PATH} from "./shared/constants/routes.js";

function App() {
    const [user, setUser] = useState(undefined);

    const location = useLocation();
    const [prevPath] = useState(location.pathname);

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const validateToken = useQuery("validate-token", services.auth.validate);

    useEffect(() => {
        setUser(validateToken.data?.sub);

        if (user === undefined) {
            queryClient.invalidateQueries("validate-token");
        } else if (user) {
            navigate(prevPath.startsWith(AUTH_PATH) ? "/" : prevPath, {replace: true});
        }
    }, [validateToken.data, user]);

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            <Sidebar/>
            <Routing/>
        </div>
    )
}

export default App
