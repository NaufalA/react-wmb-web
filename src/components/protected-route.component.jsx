import {AUTH_LOGIN_PATH, ERROR_FORBIDDEN_PATH} from "../shared/constants/routes.js";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ProtectedRoute(props) {
    const { role, children } = props;

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);

    if (!isLoggedIn) {
        return <Navigate to={AUTH_LOGIN_PATH} replace />
    } else if (role && role !== user?.role) {
        return <Navigate to={ERROR_FORBIDDEN_PATH} replace />
    } else {
        return children
    }
}