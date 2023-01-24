import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useEditMenuPage from "./edit-menu.page.js";

export default function EditMenu() {
    const { formInputs, handleChange, handleSubmit, handleCancel } = useEditMenuPage();

    return (
        <Container>
            <h1>Edit Menu</h1>
            <GenericForm
                inputs={formInputs}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="UPDATE MENU"
                onCancel={handleCancel}
            />
        </Container>
    );
}
