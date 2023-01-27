import {Container} from "../../../components/containers/index.js";
import useLoginPage from "./login.page.js";
import {GenericForm} from "../../../components/forms/index.js";
import {useSelector} from "react-redux";

export default function Login() {
    const authError = useSelector(state => state.auth.error);

    const [inputs, data, handleChange, handleSubmit] = useLoginPage();

    return (
        <Container className="grid place-content-center">
            <div className=" shadow-md rounded-md p-8 bg-accent flex flex-col items-stretch gap-4">
                <h1 className="text-center font-bold">Login</h1>
                {authError && (
                    <p className="p-2 rounded-sm border-2 border-danger text-danger text-center">
                        {authError.reason}
                    </p>
                )
                }
                <GenericForm
                    inputs={inputs}
                    formData={data}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitText="LOGIN"
                />
            </div>
        </Container>
    )
}