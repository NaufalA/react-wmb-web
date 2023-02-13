export default function Button(props) {
    const {children, className, ...others} = props;

    return (
        <button
            {...others}
            className={`p-2.5 bg-info text-background uppercase font-bold rounded-md ${className || ""}`}
        >
            {children}
        </button>
    );
}