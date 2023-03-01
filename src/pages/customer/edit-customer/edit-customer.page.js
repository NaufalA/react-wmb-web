import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {CUSTOMER_LIST_PATH} from "../../../shared/constants/routes.js";
import {useForm} from "../../../shared/hooks/index.js";
import {object, string} from "yup";
import {useMutation, useQuery} from "react-query";
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
    },
    {
        title: "Address",
        type: "textarea",
        name: "address",
        placeholder: "Enter Customer Address",
    },
];

const validationSchema = object({
    name: string().required("Customer Name is Required"),
    email: string().required("Customer E-Mail is Required"),
    address: string().required("Customer Address is Required"),
});

export default function useEditCustomerPage() {

    const {id} = useParams();

    const navigate = useNavigate();

    const getCustomerQuery = useQuery(
        ["get-customer", id],
        () => services.customer.getCustomer(id),
        {keepPreviousData: true}
    );
    const currentCustomer = getCustomerQuery.data;

    const [formInputs, formData, _, refreshForm] = useForm(
        inputs,
        currentCustomer
    );

    useEffect(() => {
        refreshForm(currentCustomer)
    }, [currentCustomer]);

    const updateCustomerMutation = useMutation(services.customer.updateCustomer);
    const handleSubmit = (values) => {
        const updatedCustomer = {
            ...currentCustomer,
            name: values.name,
            email: values.email,
            address: values.address,
        };

        updateCustomerMutation.mutate({id, updatedCustomer}, {
            onSuccess: (res) => {
                window.alert(`Success Update Customer '${res.name}'`);
                navigate(CUSTOMER_LIST_PATH);
            }
        });
    };

    const handleCancel = () => {
        navigate(CUSTOMER_LIST_PATH);
    };

    return [formInputs, formData, validationSchema, handleSubmit, handleCancel];
}