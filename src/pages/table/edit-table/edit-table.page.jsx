import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useEditTablePage from "./edit-table.page.js";

export default function EditTable() {
    const {inputs, formError, handleSubmit, onCancel} = useEditTablePage();

    return (
        <Container>
            <h1>Edit Table</h1>
            <GenericForm
                inputs={inputs}
                error={formError}
                onSubmit={handleSubmit}
                submitText="UPDATE TABLE"
                onCancel={onCancel}
            />
        </Container>
    );
}
