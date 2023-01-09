import {AUTH_LOGIN_PATH} from "../shared/constants/routes.js";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute(props) {
    const { role, children } = props;

    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to={AUTH_LOGIN_PATH} replace />
    // } else if (role && role !== user?.role) {
    //     return <Navigate to={ERROR_FORBIDDEN_PATH} replace />
    } else {
        return children
    }
}