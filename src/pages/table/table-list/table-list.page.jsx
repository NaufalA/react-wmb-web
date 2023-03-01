import {withList} from "../../../components/hoc/index.js";
import {TABLE_ADD_PATH, TABLE_EDIT_PATH} from "../../../shared/constants/routes.js";
import TableItem from "./table-item.component.jsx";
import {ListGroup} from "../../../components/containers/index.js";
import services from "../../../services/index.js";

const List = (props) => {
    const { data, navigate, onDelete } = props;

    const onEdit = (d) => {
        navigate(`${TABLE_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        onDelete(d, `Are you sure you want to remove Table '${d.name}'`, `Success Remove Table with ID ${d.id}`);
    };

    return (
        <ListGroup>
            {data.map((d, i) => (
                <TableItem
                    key={`table-item-${i}`}
                    data={d}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ))}
        </ListGroup>
    );
};

const TableList = withList(List, {
    listApi: services.table.listTable,
    deleteApi: services.table.removeTable,
    listQueryKey: "list-table",
    label: "Table",
    addPath: TABLE_ADD_PATH,
    paginated: false
});
export default TableList;
