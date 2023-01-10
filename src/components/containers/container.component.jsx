export default function Container(props) {
    const {children, className} = props;

    return (
        <div className={`px-10 py-4 h-full ${className || ""}`}>
            {children}
        </div>
    )
}