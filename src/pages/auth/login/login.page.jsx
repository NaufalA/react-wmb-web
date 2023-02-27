import {Container} from "../../../components/containers/index.js";
import useLoginPage from "./login.page.js";
import {useSelector} from "react-redux";
import {FormikForm} from "../../../components/forms/index.js";

export default function Login() {
    const authError = useSelector(state => state.auth.error);

    const [inputs, data, handleChange, handleSubmit, initialValues, validationSchema] = useLoginPage();

    return (
        <Container className="grid place-content-center">
            <div className=" shadow-md rounded-md p-8 bg-accent flex flex-col items-stretch gap-4">
                <h1 className="text-center font-bold">Login</h1>
                {authError && (
                    <p className="p-2 rounded-sm border-2 border-danger text-danger text-center">
                        {authError.reason || authError.message}
                    </p>
                )
                }
                <FormikForm
                    inputs={inputs}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    submitText="LOGIN"
                />
            </div>
        </Container>
    )
}