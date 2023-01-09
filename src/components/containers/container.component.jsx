export default function Container(props) {
    const {children} = props;

    return (
        <div className="px-20 flex">
            {children}
        </div>
    )
}