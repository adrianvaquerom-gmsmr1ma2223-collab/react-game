import "./button.css";

const Button = ({action, size, type, text}) => {
    return(
        <button
            onClick={() => action()}
            className={`btn-react ${type} ${size}`}
        >
            {text}
        </button>
    )
}

export default Button;