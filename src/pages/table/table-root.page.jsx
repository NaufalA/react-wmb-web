import {Outlet} from "react-router-dom";
import {ProtectedRoute} from "../../components/index.js";

export default function TableRoot() {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    )
}
