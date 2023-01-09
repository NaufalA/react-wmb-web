import {Container} from "../../../components/containers/index.js";
import useLoginPage from "./login.page.js";
import {GenericForm} from "../../../components/forms/index.js";
import {useSelector} from "react-redux";

export default function Login() {
    const authError = useSelector(state => state.auth.error);

    const {inputs, handleSubmit, formError} = useLoginPage();

    return (
        <Container>
            <div className="d-flex justify-content-center">
                {authError && <p>{authError.message}</p>}
                <h1>Login</h1>
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