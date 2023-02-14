import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {CUSTOMER_LIST_PATH} from "../../../shared/constants/routes.js";
import {useForm} from "../../../shared/hooks/index.js";
import {customerAction} from "../../../store/actions/index.js";
import {useEffect} from "react";
import store from "../../../store/store.js";

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

export default function useAddCustomerPage() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [addCustomerInputs, addCustomerData, handleChange] = useForm(inputs);

    const handleSubmit = () => {
        dispatch(
            customerAction.addCustomer.requested({
                name: addCustomerData.name,
                email: addCustomerData.email,
                address: addCustomerData.address,
            })
        );
    };

    const handleCancel = () => {
        navigate(CUSTOMER_LIST_PATH);
    };

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const customer = store.getState().customer;
            if (customer.currentCustomer && !customer.error) {
                window.alert(`Success Create new Menu '${customer.currentCustomer.name}'`);
                navigate(CUSTOMER_LIST_PATH);
            }
        });
        return () => unsubscribe();
    },[]);

    return [addCustomerInputs, addCustomerData, handleChange, handleSubmit, handleCancel];
}