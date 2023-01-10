import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import menuMiddleware from "../../../store/middlewares/menu.middleware.js";
import services from "../../../services/index.js";

export default function useAddMenuPage() {
    const [menuCategories, setMenuCategories] = useState(null);

    useEffect(() => {
        services.menu.listCategory().then(res => {
            setMenuCategories(res);
        });
    }, []);

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
            options: menuCategories
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
                menuCategoryId: target.menuCategory.value,
            })
        ).then((res) => {
            window.alert(`Success Create new Menu '${res.name}'`);
            navigate(MENU_LIST_PATH);
        });
    };

    return {inputs, formError, handleSubmit};
}