import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import services from "../../../services/index.js";
import {number, object, string} from "yup";
import {useForm} from "../../../shared/hooks/index.js";
import {useMutation} from "react-query";

const validationSchema = object({
    name: string().required("Menu Name is Required"),
    unitPrice: number().required("Unit price is Required"),
    menuCategory: number().required()
});

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
        },
        {
            title: "Unit Price",
            type: "number",
            name: "unitPrice",
            placeholder: "Enter Price",
        },
        {
            title: "Menu Category",
            type: "select",
            name: "menuCategory",
            placeholder: "Select Menu Category",
            options: menuCategories,
        },
    ];

    const [_, formData] = useForm(inputs);

    const navigate = useNavigate();

    const addMenuMutation = useMutation(services.menu.addMenu);
    const handleSubmit = (values) => {
        const dto = {
            name: values.name,
            unitPrice: values.unitPrice,
            menuCategoryId: values.menuCategory,
        };

        addMenuMutation.mutate(dto, {
            onSuccess: (res) => {
                window.alert(`Success Create new Menu '${res.name}'`);
                navigate(MENU_LIST_PATH);
            }
        });
    };

    const handleCancel = () => {
        navigate(MENU_LIST_PATH);
    };

    const initialValues = {...formData};

    return {inputs, initialValues, validationSchema, handleSubmit, handleCancel};
}