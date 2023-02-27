import {Container} from "../../../components/containers/index.js";
import {FormikForm} from "../../../components/forms/index.js";
import useEditCustomerPage from "./edit-customer.page.js";

export default function EditCustomer() {
    const [inputs, initialValues, validationSchema, onSubmit, onCancel] = useEditCustomerPage();

    return (
        <Container>
            <h1>Edit Customer</h1>
            <FormikForm
                inputs={inputs}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="UPDATE CUSTOMER"
                onCancel={onCancel}
            />
        </Container>
    );
}
