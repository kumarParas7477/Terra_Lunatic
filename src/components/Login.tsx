import { Fragment, useContext } from "react";
import "./Login.css";
import {  useWallet, } from "@terra-money/wallet-provider";
import getItem from "../util/dom";
const Options = (props) =>{
    return (
        <div className="loginBox col-9 optionsButton" >
     
          {props.availableConnectTypes.map((type)=>
        <div onClick={() => props.select(type)}>{type}</div>
          )}
        
        </div>
    )
}

const Login  =(props) =>{  
    const { wallets ,availableConnectTypes,connect} = useWallet();
    const checkForStorage = () =>{
      let extension = getItem("__terra_chrome_extension_wallet_address__");
      if(extension){
        props.setAdd(extension);
      }
    } 
  
    const selectHandler =(type) =>{
       connect(type)
       if(type=="CHROME_EXTENSION"){
        checkForStorage(); 
       }
    }
    return (
        <Fragment>     
{wallets.length == 0 && <Options availableConnectTypes={availableConnectTypes} select={selectHandler}/> }
        </Fragment>
    )
}



export default Login;
 
