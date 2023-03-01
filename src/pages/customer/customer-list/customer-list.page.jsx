import {withList} from "../../../components/hoc/index.js";
import {CUSTOMER_ADD_PATH, CUSTOMER_EDIT_PATH} from "../../../shared/constants/routes.js";
import CustomerItem from "./customer-item.component.jsx";
import {ListGroup} from "../../../components/containers/index.js";
import services from "../../../services/index.js";

const List = (props) => {
    const {data, navigate, onDelete} = props;

    const onEdit = (d) => {
        navigate(`${CUSTOMER_EDIT_PATH}/${d.id}`);
    };
    const onRemove = (d) => {
        onDelete(d, `Are you sure you want to remove Customer '${d.name}'`, `Success Remove Customer with ID ${d.id}`);
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
    listApi: services.customer.listCustomer,
    deleteApi: services.customer.removeCustomer,
    listQueryKey: "list-customer",
    label: "Customer",
    addPath: CUSTOMER_ADD_PATH,
    paginated: false
});
export default CustomerList;
