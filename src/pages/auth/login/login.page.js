import { useState } from "react";

export default function useLoginPage() {
    const inputs = [
        {
            title: "Username",
            type: "text",
            name: "username",
            placeholder: "Enter Username",
        },
        {
            title: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter Password",
        },
    ];

    const [formError, setFormError] = useState({});

    const handleSubmit = async (e) => {
        const { username, password } = e.target;

        if (!username.value || !password.value) {
            const error = { username: {}, password: {} };
            if (!username.value) {
                error.username = "Username is required";
            }
            if (!password.value) {
                error.password = "Password is required";
            }

            return setFormError(error);
        }

        console.log(username, password);
    }

    return { inputs, formError, handleSubmit };
}
