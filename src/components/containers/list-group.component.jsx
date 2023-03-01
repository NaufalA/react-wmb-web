export default function ListGroup(props) {
    const { children, className, ...others } = props;

    return (
        <div
            className={`overflow-y-auto flex flex-col border-2 border-accent shadow-md ${className || ""}`}
            {...others}
        >
            {children}
        </div>
    )
}