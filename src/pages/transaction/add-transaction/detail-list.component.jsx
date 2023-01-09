import {Button} from "../../../components/buttons/index.js";

export default function DetailList(props) {
    const {detailList, onRemoveItem} = props;

    return (
        <table className="min-w-2/5">
            <tbody>
            {detailList.map((detail, i) => (
                <tr key={`detail-${i}`} className="w-full">
                    <td className="font-bold">{detail.quantity}</td>
                    <td>{detail.productName}</td>
                    <td>{detail.price}</td>
                    <td>
                        <Button onClick={() => onRemoveItem(i)}>DELETE</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}