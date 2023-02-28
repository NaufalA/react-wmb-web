import {AUTH_LOGIN_PATH, ERROR_FORBIDDEN_PATH} from "../shared/constants/routes.js";
import {Navigate} from "react-router-dom";
import {useQueryClient} from "react-query";

export default function ProtectedRoute(props) {
    const { role, children } = props;

    const queryCache = useQueryClient().getQueryCache();
    const user = queryCache.find("validate-token").state.data?.sub;

    if (!user) {
        return <Navigate to={AUTH_LOGIN_PATH} replace />
    } else if (role && role !== user.role) {
        return <Navigate to={ERROR_FORBIDDEN_PATH} replace />
    } else {
        return children
    }
}