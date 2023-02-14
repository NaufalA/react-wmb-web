import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import services from "../../../services/index.js";
import {useForm} from "../../../shared/hooks/index.js";
import {menuAction} from "../../../store/actions/index.js";
import store from "../../../store/store.js";

export default function useEditMenuPage() {
    const loading  = useSelector(state => state.menu.loading);

    const {id} = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

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

    const currentMenu = useSelector(
        (state) => state.menu.currentMenu
    );

    const [formInputs, menuForm, handleChange, refreshForm] = useForm(
        inputs,
        {
            name: currentMenu?.name,
            unitPrice: currentMenu?.unitPrice,
            menuCategory: currentMenu?.menuCategory?.id
        }
    );

    useEffect(() => {
        if ((!currentMenu || currentMenu.id !== Number(id)) && !loading) {
            dispatch(menuAction.getMenu.requested(id));
        } else {
            refreshForm({
                    name: currentMenu?.name,
                    unitPrice: currentMenu?.unitPrice,
                    menuCategory: currentMenu?.menuCategory?.id
                }
            )
        }
    }, [dispatch, id, currentMenu]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedMenu = {
            ...currentMenu,
            name: menuForm.name,
            unitPrice: menuForm.unitPrice,
            menuCategory: menuCategories.find(c => c.id === Number(menuForm.menuCategory))
        };
        dispatch(menuAction.updateMenu.requested(currentMenu.id, updatedMenu));
        const unsubscribe = store.subscribe(() => {
            const menu = store.getState().menu;
            if (menu.currentMenu && !menu.error) {
                window.alert(`Success Update Menu '${menu.currentMenu.id}'`);
                navigate(MENU_LIST_PATH);
                unsubscribe();
            }
        });
    };

    const handleCancel = () => {
        navigate(MENU_LIST_PATH);
    }

    return {formInputs, handleChange, handleSubmit, handleCancel};
}