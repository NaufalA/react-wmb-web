import {Container} from "./containers/index.js";
import {useDispatch, useSelector} from "react-redux";
import {authMiddleware} from "../store/middlewares/index.js";
import {Button} from "./buttons/index.js";

export default function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authMiddleware.logout());
    }

    return (
        <nav className="bg-slate-400">
            <Container className="flex justify-between">
                <h1 className="text-2xl">Warung Makan Bahari</h1>
                {isLoggedIn && (
                    <Button onClick={handleLogout}>
                        LOGOUT
                    </Button>
                )}
            </Container>
        </nav>
    )
}