import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useAddMenuPage from "./add-menu.page.js";

export default function AddMenu() {
    const {inputs, initialValues, validationSchema, handleSubmit, handleCancel} = useAddMenuPage();

    return (
        <Container>
            <h1>Add Menu</h1>
            <FormikForm
                inputs={inputs}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                submitText="ADD MENU"
                onCancel={handleCancel}
            />
        </Container>
    );
}
