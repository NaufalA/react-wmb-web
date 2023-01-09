import {withList} from "../../../components/hoc/index.js";
import {TABLE_ADD_PATH, TABLE_EDIT_PATH} from "../../../shared/constants/routes.js";
import tableMiddleware from "../../../store/middlewares/table.middleware.js";
import TableItem from "./table-item.component.jsx";
import {useDispatch} from "react-redux";

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
            dispatch(tableMiddleware.removeTable(d.id)).then((res) => {
                window.alert(`Success Remove Table with ID ${res}`);
                onDelete();
            });
        }
    };
    return (
        <div className="flex flex-col">
            {data.map((d, i) => (
                <TableItem
                    key={`table-item-${i}`}
                    data={d}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

const TableList = withList(List, {
    getDataAction: tableMiddleware.listTable,
    dataSelector: (state) => state.table.tableList,
    loadingSelector: (state) => state.table.loading,
    label: "Table",
    addPath: TABLE_ADD_PATH,
    paginated: false
});
export default TableList;
