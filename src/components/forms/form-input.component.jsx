function FormGroup(props) {
    const {title, error, children} = props;

    return (
        <div className="flex flex-col gap-2">
            {title && <p className="text-lg">{title}</p>}
            {children}
            {error && <p className="text-sm text-danger">{error}</p>}
        </div>
    );
}

export default function FormInput(props) {
    const {
        title,
        type,
        name,
        placeholder,
        value,
        defaultValue,
        onChange,
        options,
        required,
        disabled,
        error,
        min,
        max,
    } = props;

    const borderClass = error ? "border-danger" : "border-accent";
    const className = `p-2 shadow-md border rounded-md bg-background ${borderClass} ${props.className}`

    if (type === "textarea") {
        return (
            <FormGroup title={title} error={error}>
            <textarea
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={onChange ? value : undefined}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={className}
            />
            </FormGroup>
        )
    } else if (type === "select") {
        return (
            <FormGroup title={title} error={error}>
                <select
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={onChange ? value : undefined}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={className}
                >
                    {options?.map((o) => (
                        <option key={`${name}-select-${o.id}`} value={o.id}>
                            {o.name}
                        </option>
                    ))}
                </select>
            </FormGroup>
        )
    } else {
        return (
            <FormGroup title={title} error={error}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={onChange ? value : undefined}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    min={min}
                    max={max}
                    className={className}
                />
            </FormGroup>
        )
    }
}