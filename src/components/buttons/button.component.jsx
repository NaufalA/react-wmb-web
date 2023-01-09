export default function Button(props) {
    const { children, ...others } = props;

    return (
        <button {...others}>
            {children}
        </button>
    );
}