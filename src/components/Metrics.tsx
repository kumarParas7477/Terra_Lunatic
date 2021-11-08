import { Coin, Coins } from "@terra-money/terra.js";
import { Fragment, ReactNode, useContext, useEffect, useState } from "react";
import { setCoins } from "../actions/user";
import TerraContext from "../context/TerraContext";
import { ICoin } from "../interfaces";
import toInteger from "../util/numberConversion";
import "./Metrics.css";

interface IMetrics {
    coin : ICoin,
}

const Metrics = (props : IMetrics) =>{
    let terra = useContext(TerraContext);
    let [coin,setCoin] = useState('');
    
    useEffect(()=>{
        
        terra.terraClient.apiRequester.get(`/cosmos/bank/v1beta1/denoms_metadata/${props.coin.coin.denom}`).then((info : any)=> setCoin(info.metadata.symbol));
    },[])
   
    return (
            <div className="metric">
       <label>{coin}</label>
       <span>{toInteger(props.coin.coin.amount.toNumber())}</span>
            </div>
    )
}
export default Metrics;