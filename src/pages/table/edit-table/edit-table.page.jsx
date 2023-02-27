import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useEditTablePage from "./edit-table.page.js";

export default function EditTable() {
    const {inputs, initialValues, validationSchema, handleSubmit, handleCancel} = useEditTablePage();

    return (
        <Container>
            <h1>Edit Table</h1>
            <FormikForm
                inputs={inputs}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                submitText="UPDATE TABLE"
                onCancel={handleCancel}
            />
        </Container>
    );
}
