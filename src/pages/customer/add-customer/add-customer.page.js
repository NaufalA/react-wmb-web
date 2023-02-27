import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {CUSTOMER_LIST_PATH} from "../../../shared/constants/routes.js";
import customerMiddleware from "../../../store/middlewares/customer.middleware.js";
import {useForm} from "../../../shared/hooks/index.js";
import {object, string} from "yup";

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

    const dispatch = useDispatch();

    const [addCustomerInputs, addCustomerData, handleChange] = useForm(inputs);

    const handleSubmit = (values) => {
        dispatch(
            customerMiddleware.addCustomer({
                name: values.name,
                email: values.email,
                address: values.address,
            })
        ).then((res) => {
            window.alert(`Success Create new Customer '${res.name}'`);
            navigate(CUSTOMER_LIST_PATH);
        });
    };

    const handleCancel = () => {
        navigate(CUSTOMER_LIST_PATH);
    };

    return [addCustomerInputs, addCustomerData, handleChange, handleSubmit, handleCancel, validationSchema];
}