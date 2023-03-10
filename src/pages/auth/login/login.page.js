import {authMiddleware} from "../../../store/middlewares/index.js";
import {useDispatch} from "react-redux";
import {useForm} from "../../../shared/hooks/index.js";

const inputs = [
    {
        title: "E-mail",
        type: "email",
        name: "email",
        placeholder: "Enter E-mail",
        validation: {
            required: {}
        }
    },
    {
        title: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter Password",
        validation: {
            required: {},
            length: {
                min: 6,
                property: "Password",
                units: "characters"
            }
        }
    },
];

export default function useLoginPage() {

    const [loginInputs, loginData, handleChange] = useForm(inputs);

    const dispatch = useDispatch();
    const handleSubmit = async () => {
        const dto = {
            email: loginData.email,
            password: loginData.password
        }

        dispatch(authMiddleware.login(dto));
    }

    return [loginInputs, loginData, handleChange, handleSubmit];
}
