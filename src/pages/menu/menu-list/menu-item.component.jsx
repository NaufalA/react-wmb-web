import {Button} from "../../../components/buttons/index.js";

export default function MenuItem(props) {
    const {data, onEdit, onRemove} = props;

    return (
        <div className="w-full flex flex-row">
            <div className="grow">
                <h3 className="text-lg font-bold">{data.name}</h3>
                <p>{data.unitPrice}</p>
            </div>
            <div className="flex gap-2">
                {/*<Button onClick={() => onEdit(data)}>*/}
                {/*    EDIT*/}
                {/*</Button>*/}
                <Button onClick={() => onRemove(data)}>
                    DELETE
                </Button>
            </div>
        </div>
    );
}