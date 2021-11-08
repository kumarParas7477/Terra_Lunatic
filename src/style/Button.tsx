import "./Button.css";
const Button = (props) =>{


    return (
        <button className="uButton" onClick={props.onclick}>{props.name}</button>
    )
}

export default Button;