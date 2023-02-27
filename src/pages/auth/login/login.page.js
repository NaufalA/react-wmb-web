import {authMiddleware} from "../../../store/middlewares/index.js";
import {useDispatch} from "react-redux";
import {useForm} from "../../../shared/hooks/index.js";
import {object, string} from "yup";

const inputs = [
    {
        title: "E-mail",
        type: "text",
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

const validationSchema = object({
    email: string()
        .email()
        .required("E-Mail is Required"),
    password: string()
        .required("Password is Required")
        .min(6, "Password must be at least 6 characters long")
})

export default function useLoginPage() {

    const [loginInputs, loginData, handleChange] = useForm(inputs);

    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        const dto = {
            email: values.email,
            password: values.password
        }

        dispatch(authMiddleware.login(dto));
    }

    const initialValues = {
        ...loginData
    }

    return [loginInputs, loginData, handleChange, handleSubmit, initialValues, validationSchema];
}
