import {withList} from "../../../components/hoc/index.js";
import {TABLE_ADD_PATH, TABLE_EDIT_PATH} from "../../../shared/constants/routes.js";
import TableItem from "./table-item.component.jsx";
import {useDispatch} from "react-redux";
import {ListGroup} from "../../../components/containers/index.js";
import {tableAction} from "../../../store/actions/index.js";

const List = (props) => {
    const { data, navigate, onDelete } = props;

    const dispatch = useDispatch();
    const onEdit = (d) => {
        navigate(`${TABLE_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        if (
            window.confirm(`Are you sure you want to remove Table '${d.name}'`)
        ) {
            dispatch(tableAction.removeTable.requested(d.id)).then((res) => {
                window.alert(`Success Remove Table with ID ${res}`);
                onDelete();
            });
        }
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
    getDataAction: tableAction.listTable.requested,
    dataSelector: (state) => state.table.tableList,
    loadingSelector: (state) => state.table.loading,
    label: "Table",
    addPath: TABLE_ADD_PATH,
    paginated: false
});
export default TableList;
