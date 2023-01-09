import {Outlet} from "react-router-dom";
import {ProtectedRoute} from "../../components/index.js";

export default function TransactionRoot() {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    )
}
