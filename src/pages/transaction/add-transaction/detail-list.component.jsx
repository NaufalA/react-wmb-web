import {Button} from "../../../components/buttons/index.js";

export default function DetailList(props) {
    const {detailList, onRemoveItem} = props;

    return (
        <table className="w-full">
            <tbody>
            {detailList.map((detail, i) => (
                <tr key={`detail-${i}`} className="w-full">
                    <td className="font-bold">{detail.quantity}</td>
                    <td className="font-bold">{detail.productName}</td>
                    <td>{detail.price}</td>
                    <td className="text-right">
                        <Button onClick={() => onRemoveItem(i)} className="bg-danger">DELETE</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}