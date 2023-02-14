import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import {tableAction} from "../../../store/actions/index.js";

export default function useEditTablePage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const currentTable = useSelector(
        (state) => state.table.currentTable
    );

    const [formData, setFormData] = useState({
        name: "",
        availability: "",
    });

    useEffect(() => {
        if (currentTable && currentTable.id === Number(id)) {
            setFormData({
                name: currentTable.name,
                availability: currentTable.availability,
            });
        } else {
            dispatch(tableAction.getTable.requested(id));
        }
    }, [dispatch, id, currentTable]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        for (const { name: inputName } of inputs) {
            if (name === inputName) {
                setFormData((oldData) => ({
                    ...oldData,
                    [name]: value,
                }));
                break;
            }
        }
    }

    const inputs = [
        {
            title: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter Table Name",
            value: formData.name,
            onChange: handleChange,
            required: true,
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
            value: formData.availability,
            onChange: handleChange,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const { target } = e;

        dispatch(
            tableAction.updateTable.requested(currentTable.id, {
                ...currentTable,
                name: target.name.value,
                availability: target.availability.value === "true",
            })
        ).then((res) => {
            window.alert(`Success Update Table '${res.name}'`);
            navigate(TABLE_LIST_PATH);
        });
    };

    return { navigate, inputs, handleSubmit };
}