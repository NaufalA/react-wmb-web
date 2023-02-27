import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useAddCustomerPage from "./add-customer.page.js";

export default function AddCustomer() {
    const [inputs, formData, _, onSubmit, onCancel, validationSchema] = useAddCustomerPage();

    return (
        <Container>
            <h1>Add Customer</h1>
            <FormikForm
                inputs={inputs}
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="ADD CUSTOMER"
                onCancel={onCancel}
            />
        </Container>
    );
}
