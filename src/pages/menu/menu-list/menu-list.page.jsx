import {withList} from "../../../components/hoc/index.js";
import {MENU_ADD_PATH, MENU_EDIT_PATH} from "../../../shared/constants/routes.js";
import MenuItem from "./menu-item.component.jsx";
import {ListGroup} from "../../../components/containers/index.js";
import services from "../../../services/index.js";

const List = (props) => {
    const { data, navigate, onDelete } = props;

    const onEdit = (d) => {
        navigate(`${MENU_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        onDelete(
            d,
            window.confirm(`Are you sure you want to remove Menu '${d.name}'`),
            `Success Remove Menu with ID ${d.id}`
        );
    };
    return (
        <ListGroup>
            {data.map((d, i) => (
                <MenuItem
                    key={`menu-item-${i}`}
                    data={d}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ))}
        </ListGroup>
    );
};

const MenuList = withList(List, {
    listApi: services.menu.listMenu,
    deleteApi: services.menu.removeMenu,
    listQueryKey: "list-menu",
    label: "Menu",
    addPath: MENU_ADD_PATH,
    paginated: false
});
export default MenuList;