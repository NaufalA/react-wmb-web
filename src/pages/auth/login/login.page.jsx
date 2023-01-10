import {Container} from "../../../components/containers/index.js";
import useLoginPage from "./login.page.js";
import {GenericForm} from "../../../components/forms/index.js";
import {useSelector} from "react-redux";

export default function Login() {
    const authError = useSelector(state => state.auth.error);

    const {inputs, handleSubmit, formError} = useLoginPage();

    return (
        <Container>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl text-center">Login</h1>
                {authError && (
                    <p className="p-2 rounded-sm border-2 border-danger text-danger text-center">
                        {authError.message}
                    </p>
                )
                }
                <GenericForm
                    inputs={inputs}
                    error={formError}
                    onSubmit={handleSubmit}
                    submitText="LOGIN"
                />
            </div>
        </Container>
    )
}