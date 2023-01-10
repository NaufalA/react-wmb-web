import useTransactionDetailPage from "./transaction-detail.page.js";
import {Container} from "../../../components/containers/index.js";

export default function TransactionDetail() {
    const {transaction} = useTransactionDetailPage();

    return (
        <Container>
            {transaction && (
                <div className="flex flex-col gap-2">
                    <h1>{new Date(transaction?.transactionDate).toLocaleString()}</h1>
                    <h3>Customer: {transaction?.customerName}</h3>
                    <h3>Table: {transaction?.tableName}</h3>
                    <p>{transaction?.status}</p>
                    <div className="m-4">
                        <table className="w-full">
                            <thead className="text-left">
                            <tr>
                                <th>Menu Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th className="text-right">Total Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {transaction?.detailList?.map((detail, i) => (
                                <tr key={`detail-${i}`}>
                                    <td>{detail.menuName}</td>
                                    <td>{detail.unitPrice}</td>
                                    <td>{detail.quantity}</td>
                                    <td className="text-right">{detail.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <hr/>
                        <h1 className="text-right">Sub Total: {transaction.subTotal}</h1>
                    </div>
                </div>
            )
            }
        < /Container>
    );
}