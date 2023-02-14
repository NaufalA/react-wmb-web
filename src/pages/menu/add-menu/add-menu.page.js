import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import services from "../../../services/index.js";
import {menuAction} from "../../../store/actions/index.js";
import store from "../../../store/store.js";

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

        const {target} = e;

        dispatch(
            menuAction.addMenu.requested({
                name: target.name.value,
                unitPrice: target.unitPrice.value,
                menuCategoryId: target.menuCategory.value,
            })
        );
        const unsubscribe = store.subscribe(() => {
            const menu = store.getState().menu;
            if (menu.currentMenu && !menu.error) {
                window.alert(`Success Create new Menu '${menu.currentMenu.name}'`);
                navigate(MENU_LIST_PATH);
                unsubscribe();
            }
        });
    };

    return {inputs, formError, handleSubmit};
}