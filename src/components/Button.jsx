
function Button({ text, color, onClick, type = "button" }) {
    return (
        <button
            type={type}
            style={{
                backgroundColor: color,
                fontSize: "12px",
                padding: "5px 10px"
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
