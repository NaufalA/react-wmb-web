import {Button} from "../../../components/buttons/index.js";

export default function TransactionItem(props) {
    const {data, onDetail} = props;

    return (
        <div className="w-full flex flex-row">
            <div className="grow">
                <h3 className="text-lg font-bold">{new Date(data.transactionDate).toLocaleString()}</h3>
                <p>{data.customerName}</p>
                <p>{data.subTotal}</p>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => onDetail(data)}>
                    DETAIL
                </Button>
            </div>
        </div>
    );
}