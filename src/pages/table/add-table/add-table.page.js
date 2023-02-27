import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import tableMiddleware from "../../../store/middlewares/table.middleware.js";
import {useForm} from "../../../shared/hooks/index.js";
import {boolean, object, string} from "yup";

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

    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(
            tableMiddleware.addTable({
                name: values.name,
                availability: values.availability
            })
        ).then((res) => {
            window.alert(`Success Create new Table '${res.name}'`);
            navigate(TABLE_LIST_PATH);
        });
    };

    const onCancel = () => {
        navigate(TABLE_LIST_PATH);
    };

    return {inputs, initialValues, validationSchema, handleSubmit, onCancel};
}