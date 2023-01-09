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
        <div className="d-flex gap-2 justify-content-end align-items-center">
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
                    variant="outline-primary"
                >
                    PREV
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                    <Button
                        key={`page-${i}`}
                        onClick={() => onChangePage(i)}
                        disabled={disabled}
                        variant={`${i === page ? "primary" : "outline-primary"}`}
                    >
                        {i + 1}
                    </Button>
                ))}
                <Button
                    onClick={() => onChangePage(page + 1)}
                    disabled={disabled || page === totalPages - 1}
                    variant="outline-primary"
                >
                    NEXT
                </Button>
            </div>
        </div>
    );
}
