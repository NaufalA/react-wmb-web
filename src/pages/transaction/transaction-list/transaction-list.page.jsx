import {withList} from "../../../components/hoc/index.js";
import {TRANSACTION_ADD_PATH, TRANSACTION_PATH} from "../../../shared/constants/routes.js";
import TransactionItem from "./transaction-item.component.jsx";
import {ListGroup} from "../../../components/containers/index.js";
import {transactionAction} from "../../../store/actions/index.js";

const List = (props) => {
    const { data, navigate } = props;

    const onDetail = (d) => {
        navigate(`${TRANSACTION_PATH}/${d.id}`);
    };
    return (
        <ListGroup>
            {data.map((d, i) => (
                <TransactionItem
                    key={`transaction-item-${i}`}
                    data={d}
                    onDetail={onDetail}
                />
            ))}
        </ListGroup>
    );
};

const TransactionList = withList(List, {
    getDataAction: transactionAction.listTransaction.requested,
    dataSelector: (state) => state.transaction.transactionList,
    loadingSelector: (state) => state.transaction.loading,
    label: "Transaction",
    addPath: TRANSACTION_ADD_PATH,
    paginated: true
});
export default TransactionList;
