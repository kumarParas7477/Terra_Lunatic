import toInteger from "../util/numberConversion";
import "./rewards.css";
const Rewards = (props) =>{

    return (
        <div className="reward">{props.denom.slice(0,4)} :  {toInteger(props.amount)} </div>
        
    )


}

export default Rewards;