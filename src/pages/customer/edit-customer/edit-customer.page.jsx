import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useEditCustomerPage from "./edit-customer.page.js";

export default function EditCustomer() {
    const [inputs, formData, onChange, onSubmit, onCancel] = useEditCustomerPage();

    return (
        <Container>
            <h1>Edit Customer</h1>
            <GenericForm
                inputs={inputs}
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                submitText="UPDATE CUSTOMER"
                onCancel={onCancel}
            />
        </Container>
    );
}
