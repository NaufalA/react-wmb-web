import {FormInput} from "../forms/index.js";
import {Button} from "./index.js";

export default function PaginationControl(props) {
    const {
        page,
        size,
        count,
        totalPages,
        totalCount,
        onChangePage,
        onChangeSize,
        disabled,
    } = props;

    return (
        <div className="flex gap-2 justify-end items-center">
            <span>{`showing ${count} out of ${totalCount} data`}</span>
            <FormInput
                type="select"
                value={size}
                onChange={(e) => onChangeSize(Number(e.target.value))}
                disabled={disabled}
                style={{ width: "20%" }}
                options={[5, 10, 25, 50, 100].map((p) => ({ id: p, name: p }))}
            />
            <div>
                <Button
                    onClick={() => onChangePage(page - 1)}
                    disabled={disabled || page === 0}
                    className="rounded-l-md rounded-r-none"
                >
                    PREV
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                    <Button
                        key={`page-${i}`}
                        onClick={() => onChangePage(i)}
                        disabled={disabled}
                        className={`rounded-none ${i === page ? "bg-info" : "border-info"}`}
                    >
                        {i + 1}
                    </Button>
                ))}
                <Button
                    onClick={() => onChangePage(page + 1)}
                    disabled={disabled || page === totalPages - 1}
                    className="rounded-r-md rounded-l-none"
                >
                    NEXT
                </Button>
            </div>
        </div>
    );
}
