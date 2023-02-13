import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CUSTOMER_LIST_PATH} from "../../../shared/constants/routes.js";
import customerMiddleware from "../../../store/middlewares/customer.middleware.js";
import {useForm} from "../../../shared/hooks/index.js";

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
    },
    {
        title: "Address",
        type: "textarea",
        name: "address",
        placeholder: "Enter Customer Address",
    },
];

export default function useEditCustomerPage() {

    const {id} = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const currentCustomer = useSelector(
        (state) => state.customer.currentCustomer
    );

    const [formInputs, formData, handleChange, refreshForm] = useForm(
        inputs,
        currentCustomer
    );

    useEffect(() => {
        if (!currentCustomer || currentCustomer.id !== Number(id)) {
            dispatch(customerMiddleware.getCustomer(id));
        } else {
            refreshForm(currentCustomer)
        }
    }, [dispatch, id, currentCustomer]);

    const handleSubmit = () => {
        const updatedCustomer = {
            ...currentCustomer,
            name: formData.name,
            email: formData.email,
            address: formData.address,
        };
        console.log(updatedCustomer)

        dispatch(
            customerMiddleware.updateCustomer(currentCustomer.id, updatedCustomer)
        ).then((res) => {
            window.alert(`Success Update Customer '${res.name}'`);
            navigate(CUSTOMER_LIST_PATH);
        });
    };

    const handleCancel = () => {
        navigate(CUSTOMER_LIST_PATH);
    };

    return [formInputs, formData, handleChange, handleSubmit, handleCancel];
}