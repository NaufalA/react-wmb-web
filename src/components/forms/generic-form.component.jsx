import {FormInput} from "./index.js";
import {Button} from "../buttons/index.js";
import {useState} from "react";

export default function GenericForm(props) {
    const {inputs, formData, onChange, onSubmit, submitText, onCancel, cancelText, loading, extraContent} = props;

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        const errors = validateInputs(inputs, formData);

        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return false;
        }

        onSubmit(e);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
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
                    onChange={i.onChange || onChange}
                    disabled={loading || i.disabled}
                    error={formErrors && formErrors[i.name]}
                />
            ))}
            {extraContent}
            <div className="grid grid-flow-col gap-2">
                {onCancel && (
                    <Button className="bg-danger" onClick={onCancel} disabled={loading}>
                        {cancelText || "Cancel"}
                    </Button>
                )}
                <Button className="bg-success" type="submit" disabled={loading}>
                    {submitText || "Save"}
                </Button>
            </div>
        </form>
    );
}

function validateInputs(inputs, data) {
    const errors = {};
    for (const input of inputs) {
        if (input?.validation?.required && !data[input.name]) {
            if (input.validation.required.message) {
                errors[input.name] = input.validation.required.message;
            } else {
                errors[input.name] = `${input.title} is required`;
            }
        }
        else if (input?.validation?.length) {
            const {min, max, message, property, units} = input.validation.length;
            if (
                data[input.name].length < input.validation.length.min ||
                data[input.name].length > input.validation.length.max
            ) {
                if (message) {
                    errors[input.name] = input.validation.required.message
                } else if (min && max) {
                    errors[input.name] = `${property} must be between ${min} and ${max} ${units}`
                } else if (min) {
                    errors[input.name] = `${property} must be at least ${min} ${units}`
                } else if (max) {
                    errors[input.name] = `${property} must be less than ${max} ${units}`
                }
            }
        }
        else if (input?.validation?.pattern && !input.validation?.pattern.pattern.test(data[input.name])) {
            errors[input.name] = input.validation.pattern.message
        }
    }

    return errors;
}