import {Container} from "../../../components/containers/index.js";
import {GenericForm} from "../../../components/forms/index.js";
import useAddCustomerPage from "./add-customer.page.js";

export default function AddCustomer() {
    const [inputs, formData, onChange, onSubmit, onCancel] = useAddCustomerPage();

    return (
        <Container>
            <h1>Add Customer</h1>
            <GenericForm
                inputs={inputs}
                formData={formData}
                onSubmit={onSubmit}
                onChange={onChange}
                submitText="ADD CUSTOMER"
                onCancel={onCancel}
            />
        </Container>
    );
}
