import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useEditMenuPage from "./edit-menu.page.js";

export default function EditMenu() {
    const {formInputs, initialValues, validationSchema, handleSubmit, handleCancel} = useEditMenuPage();

    return (
        <Container>
            <h1>Edit Menu</h1>
            <FormikForm
                inputs={formInputs}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                submitText="UPDATE MENU"
                onCancel={handleCancel}
            />
        </Container>
    );
}
