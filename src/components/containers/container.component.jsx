export default function Container(props) {
    const {children, className} = props;

    return (
        <div className={`px-10 py-4 ${className}`}>
            {children}
        </div>
    )
}