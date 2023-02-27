import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useAddTablePage from "./add-table.page.js";

export default function AddTable() {
    const {inputs, initialValues, validationSchema, handleSubmit, onCancel} = useAddTablePage();

    return (
        <Container>
            <h1>Add Table</h1>
            <FormikForm
                inputs={inputs}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                submitText="ADD TABLE"
                onCancel={onCancel}
            />
        </Container>
    );
}
