import {FormInput} from "./index.js";
import {Button} from "../buttons/index.js";

export default function GenericForm(props) {
    const {inputs, onChange, onSubmit, submitText, onCancel, loading, error, extraContent} = props;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
            }}
            className="flex flex-col gap-4"
        >
            {inputs?.map((i) => (
                <FormInput
                    key={`input-${i.name}`}
                    title={i.title}
                    type={i.type}
                    name={i.name}
                    placeholder={i.placeholder}
                    options={i.options}
                    required={i.required}
                    defaultValue={i.defaultValue}
                    value={i.value}
                    onChange={onChange || i.onChange}
                    disabled={loading || i.disabled}
                    error={error ? error[i.name] : undefined}
                />
            ))}
            {extraContent}
            <div className="grid grid-flow-col gap-2">
                {onCancel && (
                    <Button className="bg-danger" onClick={onCancel} disabled={loading}>
                        Cancel
                    </Button>
                )}
                <Button className="bg-success" type="submit" disabled={loading}>
                    {submitText || "Save"}
                </Button>
            </div>
        </form>
    );
}