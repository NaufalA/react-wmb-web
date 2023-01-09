import {withList} from "../../../components/hoc/index.js";
import {TRANSACTION_ADD_PATH, TRANSACTION_PATH} from "../../../shared/constants/routes.js";
import TransactionItem from "./transaction-item.component.jsx";
import {transactionMiddleware} from "../../../store/middlewares/index.js";

const List = (props) => {
    const { data, navigate } = props;

    const onDetail = (d) => {
        navigate(`${TRANSACTION_PATH}/${d.id}`);
    };
    return (
        <div className="flex flex-col">
            {data.map((d, i) => (
                <TransactionItem
                    key={`transaction-item-${i}`}
                    data={d}
                    onDetail={onDetail}
                />
            ))}
        </div>
    );
};

const TransactionList = withList(List, {
    getDataAction: transactionMiddleware.listTransaction,
    dataSelector: (state) => state.transaction.transactionList,
    loadingSelector: (state) => state.transaction.loading,
    label: "Transaction",
    addPath: TRANSACTION_ADD_PATH,
    paginated: true
});
export default TransactionList;
