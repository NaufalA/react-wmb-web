import {Outlet, Route, Routes} from "react-router-dom";
import {
    AUTH_LOGIN_PATH,
    AUTH_PATH,
    ERROR_FORBIDDEN_PATH,
    MENU_ADD_PATH,
    MENU_EDIT_PATH,
    MENU_LIST_PATH,
    MENU_PATH,
    TABLE_ADD_PATH,
    TABLE_EDIT_PATH,
    TABLE_LIST_PATH,
    TABLE_PATH,
    TRANSACTION_ADD_PATH,
    TRANSACTION_LIST_PATH,
    TRANSACTION_PATH
} from "../shared/constants/routes.js";
import AuthRoot from "./auth/auth-root.page.jsx";
import Login from "./auth/login/login.page.jsx";
import Dashboard from "./dashboard/dashboard.page.jsx";
import {Forbidden} from "./error/index.js";
import MenuRoot from "./menu/menu-root.page.jsx";
import MenuList from "./menu/menu-list/menu-list.page.jsx";
import AddMenu from "./menu/add-menu/add-menu.page.jsx";
import TableRoot from "./table/table-root.page.jsx";
import TableList from "./table/table-list/table-list.page.jsx";
import AddTable from "./table/add-table/add-table.page.jsx";
import EditTable from "./table/edit-table/edit-table.page.jsx";
import TransactionRoot from "./transaction/transaction-root.jsx";
import TransactionList from "./transaction/transaction-list/transaction-list.page.jsx";
import TransactionDetail from "./transaction/transaction-detail/transaction-detail.page.jsx";
import AddTransaction from "./transaction/add-transaction/add-transaction.page.jsx";
import EditMenu from "./menu/edit-menu/edit-menu.page.jsx";

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
                    element: <AddMenu/>,
                },
                {
                    path: `${MENU_EDIT_PATH}/:id`,
                    element: <EditMenu/>
                },
            ],
        },
        {
            path: TABLE_PATH,
            element: <TableRoot/>,
            children: [
                {
                    path: TABLE_LIST_PATH,
                    element: <TableList/>,
                },
                {
                    path: TABLE_ADD_PATH,
                    element: <AddTable/>,
                },
                {
                    path: `${TABLE_EDIT_PATH}/:id`,
                    element: <EditTable/>
                },
            ],
        },
        {
            path: TRANSACTION_PATH,
            element: <TransactionRoot/>,
            children: [
                {
                    path: TRANSACTION_LIST_PATH,
                    element: <TransactionList/>,
                },
                {
                    path: `${TRANSACTION_PATH}/:id`,
                    element: <TransactionDetail/>,
                },
                {
                    path: TRANSACTION_ADD_PATH,
                    element: <AddTransaction/>,
                },
                // {
                //     path: `${TRANSACTION_EDIT_PATH}/:id`,
                //     element: <EditTransaction />
                // },
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
        <div className="grow">
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
        </div>
    )
}
