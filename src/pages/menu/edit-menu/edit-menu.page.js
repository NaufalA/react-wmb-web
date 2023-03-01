import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {MENU_LIST_PATH} from "../../../shared/constants/routes.js";
import services from "../../../services/index.js";
import {useForm} from "../../../shared/hooks/index.js";
import {number, object, string} from "yup";
import {useMutation, useQuery} from "react-query";

const validationSchema = object({
    name: string().required("Menu Name is Required"),
    unitPrice: number().required("Unit price is Required"),
    menuCategory: number().required()
});

export default function useEditMenuPage() {

    const {id} = useParams();

    const navigate = useNavigate();

    const listCategoriesQuery = useQuery("list-category", services.menu.listCategory, {
        initialData: [],
        refetchOnMount: true
    });

    const menuCategories = listCategoriesQuery.data;


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
            options: menuCategories
        },
    ];

    const getMenuQuery = useQuery(["get-menu", id], () => services.menu.getMenu(id));
    const currentMenu = getMenuQuery.data;

    const [formInputs, menuForm, handleChange, refreshForm] = useForm(
        inputs,
        {
            name: currentMenu?.name,
            unitPrice: currentMenu?.unitPrice,
            menuCategory: currentMenu?.menuCategory?.id
        }
    );

    useEffect(() => {
        refreshForm({
            name: currentMenu?.name,
            unitPrice: currentMenu?.unitPrice,
            menuCategory: currentMenu?.menuCategory?.id
        });
    }, [currentMenu]);

    const updateMenuMutation = useMutation(services.menu.updateMenu);

    const handleSubmit = (values) => {

        const updatedMenu = {
            ...currentMenu,
            name: values.name,
            unitPrice: values.unitPrice,
            menuCategory: menuCategories.find(c => c.id === Number(values.menuCategory))
        };
        updateMenuMutation.mutate({id, updatedMenu}, {
            onSuccess: (res) => {
                window.alert(`Success Update Menu '${res.name}'`);
                navigate(MENU_LIST_PATH);
            }
        });
    };

    const handleCancel = () => {
        navigate(MENU_LIST_PATH);
    }

    return {formInputs, initialValues: menuForm, validationSchema, handleChange, handleSubmit, handleCancel};
}