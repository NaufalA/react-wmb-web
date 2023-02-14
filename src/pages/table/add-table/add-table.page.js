import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {TABLE_LIST_PATH} from "../../../shared/constants/routes.js";
import {tableAction} from "../../../store/actions/index.js";
import store from "../../../store/store.js";

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
            tableAction.addTable.requested({
                name: target.name.value,
                availability: target.availability.value,
            })
        );
    };

    const onCancel = () => {
        navigate(TABLE_LIST_PATH);
    };

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const table = store.getState().table;
            if (table.currentTable && !table.error) {
                window.alert(`Success Create new Menu '${table.currentTable.name}'`);
                navigate(TABLE_LIST_PATH);
            }
        });
        return () => unsubscribe();
    },[]);

    return {inputs, formError, handleSubmit, onCancel};
}