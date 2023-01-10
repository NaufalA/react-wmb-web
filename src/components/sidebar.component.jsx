import {useDispatch, useSelector} from "react-redux";
import {authMiddleware} from "../store/middlewares/index.js";
import {Button} from "./buttons/index.js";
import {NavLink} from "react-router-dom";
import {MENU_LIST_PATH, TABLE_LIST_PATH, TRANSACTION_LIST_PATH} from "../shared/constants/routes.js";

const menu = [
    {
        path: MENU_LIST_PATH,
        label: "Manage Menu"
    },
    {
        path: TABLE_LIST_PATH,
        label: "Manage Table"
    },
    {
        path: TRANSACTION_LIST_PATH,
        label: "Manage Transaction"
    },
]

export default function Sidebar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authMiddleware.logout());
    }

    if (!isLoggedIn) return "";

    return (
        <nav className="bg-accent shadow-lg p-4 flex flex-col gap-6">
            <div>
                <h1 className="text-2xl mb-2">Warung Makan Bahari</h1>
                <p className="text-sm">Version 1.0.0</p>
            </div>
            <>
                <div className="grow flex flex-col gap-4 justify-start">
                    {menu.map((m, i) => (
                        <NavLink
                            key={`menu-${i}`}
                            to={m.path}
                            className=" p-2 bg-background rounded-md shadow-sm border-2 border-accent"
                        >
                            {m.label}
                        </NavLink>
                    ))}
                </div>
                <Button onClick={handleLogout}>
                    LOGOUT
                </Button>
            </>
        </nav>
    )
}