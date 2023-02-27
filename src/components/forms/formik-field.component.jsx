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
    const {title, type, id, name, placeholder, error, value} = props;

    const borderClass = error ? "border-danger" : "border-accent";
    const className = `p-2 shadow-md border rounded-md bg-background ${borderClass} ${props.className}`

    if (type === "select") {
        const {options} = props;

        return (
            <Field name={name} value={value}>
                {({field, meta}) => (
                    <FormGroup title={title} id={id} touched={meta.touched} error={meta.error}>
                        <select className={className} {...field}>
                            <option value={undefined}>{placeholder || `Select ${title}`}</option>
                            {options?.map((op) => (
                                <option key={`${name}-${op.id}`} value={op.id}>{op.name}</option>
                            ))}
                        </select>
                    </FormGroup>
                )}
            </Field>
        )
    }
    if (type === "textarea") {
        return (
            <Field name={name} value={value}>
                {({field, meta}) => (
                    <FormGroup title={title} id={id} touched={meta.touched} error={meta.error}>
                        <textarea placeholder={placeholder} className={className} {...field} />
                    </FormGroup>
                )}
            </Field>
        )
    }
    return (
        <Field name={name} value={value}>
            {({field, meta}) => (
                <FormGroup title={title} id={id} touched={meta.touched} error={meta.error}>
                    <input type={type} placeholder={placeholder} className={className} {...field} />
                </FormGroup>
            )}
        </Field>
    )
}