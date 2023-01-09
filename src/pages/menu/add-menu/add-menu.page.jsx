import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useAddMenuPage from "./add-menu.page.js";

export default function AddMenu() {
    const {inputs, formError, handleSubmit} = useAddMenuPage();

    return (
        <Container>
            <h1>Add Menu</h1>
            <GenericForm
                inputs={inputs}
                error={formError}
                onSubmit={handleSubmit}
                submitText="ADD MENU"
            />
        </Container>
    );
}
