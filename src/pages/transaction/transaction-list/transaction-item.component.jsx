import {Button} from "../../../components/buttons/index.js";
import {ListItem} from "../../../components/containers/index.js";

export default function TransactionItem(props) {
    const {data, onDetail} = props;

    return (
        <ListItem>
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
        </ListItem>
    );
}