import {useDispatch, useSelector} from "react-redux";
import {authMiddleware} from "../store/middlewares/index.js";
import {Button} from "./buttons/index.js";
import {NavLink} from "react-router-dom";
import {MENU_LIST_PATH, TABLE_LIST_PATH, TRANSACTION_LIST_PATH} from "../shared/constants/routes.js";

export default function Sidebar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authMiddleware.logout());
    }

    return (
        <nav className="bg-accent shadow-lg p-4 flex flex-col gap-6">
            <div>
                <h1 className="text-2xl mb-2">Warung Makan Bahari</h1>
                <p className="text-sm">Version 1.0.0</p>
            </div>
            {isLoggedIn && (
                    <>
                        <div className="grow flex flex-col gap-4 justify-start">
                            <NavLink to={MENU_LIST_PATH}>Manage Menu</NavLink>
                            <NavLink to={TABLE_LIST_PATH}>Manage Table</NavLink>
                            <NavLink to={TRANSACTION_LIST_PATH}>Manage Transaction</NavLink>
                        </div>
                        <Button onClick={handleLogout}>
                            LOGOUT
                        </Button>
                    </>
                )}
        </nav>
    )
}