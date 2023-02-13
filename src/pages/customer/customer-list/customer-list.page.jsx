import {withList} from "../../../components/hoc/index.js";
import {CUSTOMER_ADD_PATH, CUSTOMER_EDIT_PATH} from "../../../shared/constants/routes.js";
import CustomerItem from "./customer-item.component.jsx";
import {useDispatch} from "react-redux";
import {ListGroup} from "../../../components/containers/index.js";
import {customerAction} from "../../../store/actions/index.js";

const List = (props) => {
    const { data, navigate, onDelete } = props;

    const dispatch = useDispatch();
    const onEdit = (d) => {
        navigate(`${CUSTOMER_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        if (
            window.confirm(`Are you sure you want to remove Customer '${d.name}'`)
        ) {
            dispatch(customerAction.removeCustomer.requested(d.id)).then((res) => {
                window.alert(`Success Remove Customer with ID ${res}`);
                onDelete();
            });
        }
    };
    return (
        <ListGroup>
            {data.map((d, i) => (
                <CustomerItem
                    key={`customer-item-${i}`}
                    data={d}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ))}
        </ListGroup>
    );
};

const CustomerList = withList(List, {
    getDataAction: customerAction.listCustomer.requested,
    dataSelector: (state) => state.customer.customerList,
    loadingSelector: (state) => state.customer.loading,
    label: "Customer",
    addPath: CUSTOMER_ADD_PATH,
    paginated: false
});
export default CustomerList;
