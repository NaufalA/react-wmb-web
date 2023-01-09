import {Outlet} from "react-router-dom";

export default function AuthRoot() {

    return (
        <>
            <h1 className="text-xl text-center">Auth</h1>
            <Outlet />
        </>
    )
}