import {useNavigate} from "react-router-dom";
import {CUSTOMER_LIST_PATH} from "../../../shared/constants/routes.js";
import {useForm} from "../../../shared/hooks/index.js";
import {object, string} from "yup";
import {useMutation} from "react-query";
import services from "../../../services/index.js";

const inputs = [
    {
        title: "Name",
        type: "text",
        name: "name",
        placeholder: "Enter Customer Name",
        validation: {
            required: {},

        }
    },
    {
        title: "E-Mail",
        type: "email",
        name: "email",
        placeholder: "Enter Customer E-Mail",
        validation: {
            required: {},
        }
    },
    {
        title: "Address",
        type: "textarea",
        name: "address",
        placeholder: "Enter Customer Address",
        validation: {
            required: {},

        }
    },
];

const validationSchema = object({
    name: string().required("Customer Name is Required"),
    email: string().required("Customer E-Mail is Required"),
    address: string().required("Customer Address is Required"),
});

export default function useAddCustomerPage() {

    const navigate = useNavigate();

    const [addCustomerInputs, addCustomerData, handleChange] = useForm(inputs);

    const addCustomerMutation = useMutation(services.customer.addCustomer);
    const handleSubmit = (values) => {
        const dto = {
            name: values.name,
            email: values.email,
            address: values.address,
        };

        addCustomerMutation.mutate(dto, {
            onSuccess: (res) => {
                window.alert(`Success Create new Customer '${res.name}'`);
                navigate(CUSTOMER_LIST_PATH);
            }
        });
    };

    const handleCancel = () => {
        navigate(CUSTOMER_LIST_PATH);
    };

    return [addCustomerInputs, addCustomerData, handleChange, handleSubmit, handleCancel, validationSchema];
}