import {Container} from "./containers/index.js";
import {useDispatch, useSelector} from "react-redux";
import {authMiddleware} from "../store/middlewares/index.js";
import {Button} from "./buttons/index.js";
import {NavLink} from "react-router-dom";
import {MENU_LIST_PATH, TABLE_LIST_PATH, TRANSACTION_LIST_PATH} from "../shared/constants/routes.js";

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
                    <>
                        <div className="grow flex gap-4 justify-end p-2 mx-8">
                            <NavLink to={MENU_LIST_PATH}>Menu</NavLink>
                            <NavLink to={TABLE_LIST_PATH}>Table</NavLink>
                            <NavLink to={TRANSACTION_LIST_PATH}>Transaction</NavLink>
                        </div>
                        <Button onClick={handleLogout}>
                            LOGOUT
                        </Button>
                    </>
                )}
            </Container>
        </nav>
    )
}