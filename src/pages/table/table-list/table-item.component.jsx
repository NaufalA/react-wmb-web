import {Button} from "../../../components/buttons/index.js";
import {ListItem} from "../../../components/containers/index.js";

export default function TableItem(props) {
    const {data, onEdit, onRemove} = props;

    return (
        <ListItem>
            <div className="grow">
                <h3 className="text-lg font-bold">{data.name}</h3>
                <p className={`${data.availability ? "text-green-500" : "text-red-500"}`}>
                    {data.availability ? "Available" : "Unavailable"}
                </p>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => onEdit(data)}>
                    EDIT
                </Button>
                <Button onClick={() => onRemove(data)} className="bg-danger">
                    DELETE
                </Button>
            </div>
        </ListItem>
    );
}