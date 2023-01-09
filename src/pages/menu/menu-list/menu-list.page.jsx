import {withList} from "../../../components/hoc/index.js";
import {MENU_ADD_PATH, MENU_EDIT_PATH} from "../../../shared/constants/routes.js";
import menuMiddleware from "../../../store/middlewares/menu.middleware.js";
import MenuItem from "./menu-item.component.jsx";
import {useDispatch} from "react-redux";

const List = (props) => {
    const { data, navigate, onDelete } = props;

    const dispatch = useDispatch();
    const onEdit = (d) => {
        navigate(`${MENU_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        if (
            window.confirm(`Are you sure you want to remove Menu '${d.name}'`)
        ) {
            dispatch(menuMiddleware.removeMenu(d.id)).then((res) => {
                window.alert(`Success Remove Menu with ID ${res}`);
                onDelete();
            });
        }
    };
    return (
        <div className="flex flex-col">
            {data.map((d, i) => (
                <MenuItem
                    key={`menu-item-${i}`}
                    data={d}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

const MenuList = withList(List, {
    getDataAction: menuMiddleware.listMenu,
    dataSelector: (state) => state.menu.menuList,
    loadingSelector: (state) => state.menu.loading,
    label: "Menu",
    addPath: MENU_ADD_PATH,
    paginated: false
});
export default MenuList;