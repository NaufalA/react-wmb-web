export default function ListItem(props) {
    const { children, className, ...others } = props;

    return (
        <div
            className={`w-full flex flex-row p-4 border border-accent ${className || ""}`}
            {...others}
        >
            {children}
        </div>
    )
}