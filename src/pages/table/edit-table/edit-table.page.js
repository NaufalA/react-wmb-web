import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import {boolean, object, string} from "yup";
import {useForm} from "../../../shared/hooks/index.js";
import {useMutation, useQuery} from "react-query";
import services from "../../../services/index.js";

const validationSchema = object({
    name: string().required(),
    availability: boolean().required()
});

export default function useEditTablePage() {

    const {id} = useParams();

    const navigate = useNavigate();

    const getTableQuery = useQuery(["get-table", id], () => services.table.getTable(id));
    const currentTable = getTableQuery.data;

    const inputs = [
        {
            title: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter Table Name",
        },
        {
            title: "Availability",
            type: "select",
            name: "availability",
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

    const [formInputs, formData, _, refreshForm] = useForm(inputs, {
        name: currentTable?.name,
        availability: currentTable?.availability
    });


    useEffect(() => {
        refreshForm({
            name: currentTable?.name  || "",
            availability: currentTable?.availability || true,
        });
    }, [currentTable]);

    const updateTableMutation = useMutation(services.table.updateTable);
    const handleSubmit = (values) => {
        const updatedTable = {
            ...currentTable,
            name: values.name,
            availability: values.availability === "true",
        };

        updateTableMutation.mutate({id, updatedTable}, {
            onSuccess: (res) => {
                window.alert(`Success Update Table '${res.name}'`);
                navigate(TABLE_LIST_PATH);
            }
        });
    };

    const handleCancel = () => {
        navigate(TABLE_LIST_PATH);
    }

    return {inputs: formInputs, initialValues: formData, validationSchema, handleSubmit, handleCancel};
}