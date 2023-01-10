import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {authMiddleware} from "../../store/middlewares/index.js";

export default function AuthRoot() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn && user) {
            navigate("/", {replace: true})
        } else if (user === undefined) {
            dispatch(authMiddleware.validate());
        }
    }, [isLoggedIn, user]);

    return (
        <>
            <Outlet/>
        </>
    )
}