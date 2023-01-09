import {useState} from "react";
import {authMiddleware} from "../../../store/middlewares/index.js";
import {useDispatch} from "react-redux";

export default function useLoginPage() {
    const inputs = [
        {
            title: "Email",
            type: "email",
            name: "email",
            placeholder: "Enter Email",
        },
        {
            title: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter Password",
        },
    ];

    const [formError, setFormError] = useState({});

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        const {email, password} = e.target;

        const error = {username: undefined, password: undefined};
        if (!email.value || !password.value) {
            if (!email.value) {
                error.email = "Email is required";
            }
            if (!password.value) {
                error.password = "Password is required";
            }
        }
        setFormError(error);

        dispatch(authMiddleware.login({email: email.value, password: password.value}));
    }

    return {inputs, formError, handleSubmit};
}
