import {Outlet, Route, Routes} from "react-router-dom";
import {
    AUTH_LOGIN_PATH,
    AUTH_PATH,
    ERROR_FORBIDDEN_PATH, MENU_ADD_PATH, MENU_EDIT_PATH,
    MENU_LIST_PATH,
    MENU_PATH
} from "../shared/constants/routes.js";
import AuthRoot from "./auth/auth-root.page.jsx";
import Login from "./auth/login/login.page.jsx";
import Dashboard from "./dashboard/dashboard.page.jsx";
import {Forbidden} from "./error/index.js";
import MenuRoot from "./menu/menu-root.page.jsx";
import MenuList from "./menu/menu-list/menu-list.page.jsx";
import AddMenu from "./menu/add-menu/add-menu.page.jsx";

export default function Routing() {
    const routes = [
        {
            path: "/",
            element: <Dashboard/>,
            index: true,
        },
        {
            path: AUTH_PATH,
            element: <AuthRoot/>,
            children: [
                {
                    path: AUTH_LOGIN_PATH,
                    element: <Login/>,
                    index: true,
                },
            ]
        },
        {
            path: MENU_PATH,
            element: <MenuRoot/>,
            children: [
                {
                    path: MENU_LIST_PATH,
                    element: <MenuList/>,
                },
                {
                    path: MENU_ADD_PATH,
                    element: <AddMenu />,
                },
                {
                    path: MENU_EDIT_PATH,
                    element: <h1>UNDER CONSTRUCTION</h1>,
                },
            ],
        },
        {
            path: "",
            element: <Outlet/>,
            children: [
                {
                    path: ERROR_FORBIDDEN_PATH,
                    element: <Forbidden/>,
                },
            ],
        },
    ];

    return (
        <Routes>
            {routes.map((r, i) => (
                <Route
                    key={`route-${i}`}
                    path={r.path}
                    element={r.element}
                    index={r.index}
                >
                    {r.children?.map((rc, j) => (
                        <Route
                            key={`route-${i}-${j}`}
                            path={rc.path}
                            element={rc.element}
                            index={rc.index}
                        />
                    ))}
                </Route>
            ))}
        </Routes>
    )
}
