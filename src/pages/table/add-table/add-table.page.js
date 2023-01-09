import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import tableMiddleware from "../../../store/middlewares/table.middleware.js";

export default function useAddTablePage() {
    const inputs = [
        {
            title: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter Table Name",
            required: true,
        },
        {
            title: "Table Availability",
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
            ]
        },
    ];

    const [formError, setFormError] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        const {target} = e;

        dispatch(
            tableMiddleware.addTable({
                name: target.name.value,
                availability: target.availability.value,
            })
        ).then((res) => {
            window.alert(`Success Create new Table '${res.name}'`);
            navigate(TABLE_LIST_PATH);
        });
    };

    const onCancel = () => {
        navigate(TABLE_LIST_PATH);
    };

    return {inputs, formError, handleSubmit, onCancel};
}