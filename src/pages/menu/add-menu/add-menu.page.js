import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import menuMiddleware from "../../../store/middlewares/menu.middleware.js";

export default function useAddMenuPage() {
    const inputs = [
        {
            title: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter Menu Name",
            required: true,
        },
        {
            title: "Unit Price",
            type: "number",
            name: "unitPrice",
            placeholder: "Enter Price",
            required: true,
        },
        {
            title: "Menu Category",
            type: "select",
            name: "menuCategory",
            options: [
                {
                    id: 1,
                    name: "Food"
                },
                {
                    id: 2,
                    name: "Beverage"
                },
            ]
        },
    ];

    const [formError, setFormError] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        const { target } = e;

        dispatch(
            menuMiddleware.addMenu({
                name: target.name.value,
                unitPrice: target.unitPrice.value,
                menuCategory: target.menuCategory.value,
            })
        ).then((res) => {
            window.alert(`Success Create new Menu '${res.name}'`);
            navigate(MENU_LIST_PATH);
        });
    };

    return {inputs, formError, handleSubmit};
}