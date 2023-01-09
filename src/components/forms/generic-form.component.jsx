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
            className="d-flex flex-column gap-4"
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
            <div className="d-flex justify-content-center gap-2">
                {onCancel && (
                    <Button className="bg-red-600" onClick={onCancel} disabled={loading}>
                        Cancel
                    </Button>
                )}
                <Button className="bg-green-600" type="submit" disabled={loading}>
                    {submitText || "Save"}
                </Button>
            </div>
        </form>
    );
}