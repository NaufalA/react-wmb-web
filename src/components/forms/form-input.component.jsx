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
    } = props;

    if (type === "textarea") {
        return (
            <div className="flex flex-col">
                {title && <p className="text-lg">{title}</p>}
                <textarea
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={onChange ? value : undefined}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                />
                {error && <p className="text-sm">{error}</p> }
            </div>
        );
    }

    if (type === "select") {
        return (
            <div className="flex flex-col">
                {title && <p className="text-lg">{title}</p>}
                <select
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={onChange ? value : undefined}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                >
                    {options?.map((o) => (
                        <option key={`${name}-select-${o.id}`} value={o.id}>
                            {o.name}
                        </option>
                    ))}
                </select>
                {error && <p className="text-sm">{error}</p> }
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {title && <p className="text-lg">{title}</p>}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={onChange ? value : undefined}
                onChange={onChange}
                required={required}
                disabled={disabled}
            />
            {error && <p className="text-sm">{error}</p> }
        </div>
    );
}