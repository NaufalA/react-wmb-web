import {Outlet} from "react-router-dom";
import {ProtectedRoute} from "../../components/index.js";

export default function CustomerRoot() {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    )
}
