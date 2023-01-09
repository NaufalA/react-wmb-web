import useTransactionDetailPage from "./transaction-detail.page.js";
import {Container} from "../../../components/containers/index.js";

export default function TransactionDetail() {
    const {transaction} = useTransactionDetailPage();

    return (
        <Container>
            {transaction && (
                <>
                    <h1>{transaction?.transactionDate}</h1>
                    <p>{transaction?.customerName}</p>
                    <p>{transaction?.tableName}</p>
                    <p>{transaction?.status}</p>
                    <table className="w-full">
                        <thead className="text-left">
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th className="text-right">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transaction?.detailList?.map((detail, i) => (
                            <tr key={`detail-${i}`}>
                                <td>{detail.productName}</td>
                                <td>{detail.unitPrice}</td>
                                <td>{detail.quantity}</td>
                                <td className="text-right">{detail.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <hr/>
                    <h1 className="text-right">Sub Total: {transaction.subTotal}</h1>
                </>
            )
            }
        < /Container>
    );
}