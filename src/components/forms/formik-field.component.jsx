import {Field} from "formik";

function FormGroup(props) {
    const {title, id, touched, error, children} = props;

    return (
        <div className="flex flex-col gap-2">
            {title && <label htmlFor={id} className="text-lg">{title}</label>}
            {children}
            {touched && error && <p className="text-sm text-danger">{error}</p>}
        </div>
    )
}

export default function FormikField(props) {
    const {title, type, id, name, placeholder, error} = props;

    const borderClass = error ? "border-danger" : "border-accent";
    const className = `p-2 shadow-md border rounded-md bg-background ${borderClass} ${props.className}`

    if (type === "select") {
        const {options} = props;

        return (
            <Field as={type} id={id} name={name} className={className}>
                {options.map((i, op) => (
                    <option key={`${name}-${op.value}`} value={op.value}>{op.label}</option>
                ))}
            </Field>
        )
    }
    if (type === "textarea") {
        return (
            <Field as={type} id={id} name={name} placeholder={placeholder} className={className}/>
        )
    }
    return (
        <Field name={name}>
            {({field, meta}) => (
                <FormGroup title={title} id={id} touched={meta.touched} error={meta.error}>
                    <input type={type} placeholder={placeholder} className={className} {...field} />
                </FormGroup>
            )}
        </Field>
    )
}