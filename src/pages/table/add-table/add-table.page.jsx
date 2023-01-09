import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useAddTablePage from "./add-table.page.js";

export default function AddTable() {
    const {inputs, formError, handleSubmit, onCancel} = useAddTablePage();

    return (
        <Container>
            <h1>Add Menu</h1>
            <GenericForm
                inputs={inputs}
                error={formError}
                onSubmit={handleSubmit}
                submitText="ADD TABLE"
                onCancel={onCancel}
            />
        </Container>
    );
}
