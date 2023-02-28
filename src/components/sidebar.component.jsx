import {Button} from "./buttons/index.js";
import {NavLink, useNavigate} from "react-router-dom";
import {
    AUTH_LOGIN_PATH,
    CUSTOMER_LIST_PATH,
    MENU_LIST_PATH,
    TABLE_LIST_PATH,
    TRANSACTION_LIST_PATH
} from "../shared/constants/routes.js";
import {useQuery, useQueryClient} from "react-query";
import services from "../services/index.js";

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
    {
        path: CUSTOMER_LIST_PATH,
        label: "Manage Customer"
    },
]

export default function Sidebar() {
    const queryCache = useQueryClient().getQueryCache();
    const user = queryCache.find("validate-token").state.data?.sub;

    const logout = useQuery("logout", services.auth.logout, {enabled: false});
    const navigate = useNavigate();
    const handleLogout = () => {
        logout.refetch().then(() => {
            queryCache.clear();
            navigate(AUTH_LOGIN_PATH);
        });
    }

    if (!user) return "";

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