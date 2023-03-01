import {useNavigate} from "react-router-dom";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import {useForm} from "../../../shared/hooks/index.js";
import {boolean, object, string} from "yup";
import {useMutation} from "react-query";
import services from "../../../services/index.js";

const validationSchema = object({
    name: string().required(),
    availability: boolean().required()
});

export default function useAddTablePage() {
    const inputs = [
        {
            title: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter Table Name",
        },
        {
            title: "Table Availability",
            type: "select",
            name: "availability",
            placeholder: "Select Table Availability",
            options: [
                {
                    id: true,
                    name: "Available"
                },
                {
                    id: false,
                    name: "Unavailable"
                },
            ],
        },
    ];

    const [_, initialValues] = useForm(inputs);

    const navigate = useNavigate();

    const addTableMutation = useMutation(services.table.addTable);
    const handleSubmit = (values) => {
        const dto = {
            name: values.name,
            availability: values.availability
        };

        addTableMutation.mutate(dto, {
            onSuccess: (res) => {
                window.alert(`Success Create new Table '${res.name}'`);
                navigate(TABLE_LIST_PATH);
            }
        });

    };

    const onCancel = () => {
        navigate(TABLE_LIST_PATH);
    };

    return {inputs, initialValues, validationSchema, handleSubmit, onCancel};
}