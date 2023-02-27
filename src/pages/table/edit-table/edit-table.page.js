import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import tableMiddleware from "../../../store/middlewares/table.middleware.js";
import {boolean, object, string} from "yup";
import {useForm} from "../../../shared/hooks/index.js";

const validationSchema = object({
    name: string().required(),
    availability: boolean().required()
});

export default function useEditTablePage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const currentTable = useSelector(
        (state) => state.table.currentTable
    );

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
        if (currentTable && currentTable.id === Number(id)) {
            refreshForm({
                name: currentTable.name,
                availability: currentTable.availability,
            });
        } else {
            dispatch(tableMiddleware.getTable(id));
        }
    }, [dispatch, id, currentTable]);

    const handleSubmit = (values) => {
        const updatedTable = {
            ...currentTable,
            name: values.name,
            availability: values.availability === "true",
        };

        dispatch(
            tableMiddleware.updateTable(currentTable.id, updatedTable)
        ).then((res) => {
            window.alert(`Success Update Table '${res.name}'`);
            navigate(TABLE_LIST_PATH);
        });
    };

    const handleCancel = () => {
        navigate(TABLE_LIST_PATH);
    }

    return { inputs: formInputs, initialValues: formData, validationSchema, handleSubmit, handleCancel };
}