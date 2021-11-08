import Login from "./Login";
import "./landing.css";
import Metrics from "./Metrics";
import { Coin } from "@terra-money/terra.js";
import { Fragment, useContext, useEffect, useState } from "react";
import TerraContext from "../context/TerraContext";
import toInteger from "../util/numberConversion";
import anchorimg from "./../assets/anchor.svg";
import Proposal from "./Proposal";
import scoreCalculator from "../util/scoreCalculator";
import Score from "./Score";

 const  Landing  = (props) =>{
const terra = useContext(TerraContext);
const [coins,setCoins] = useState(null);
const [staked,setStaked] = useState(null);
const [proposals,setProposals] = useState(null);
const [ustInAnchor,setUstInAnchor] = useState(null);
const [score,setScore] = useState(0);
useEffect(()=>{
    if(props.show){
    terra.terraClient.bank.balance(props.address).then((a)=> setCoins(a));
    terra.terraClient.apiRequester.get(`v1/staking/${props.address}?`).then((stakeInfo)=> setStaked(stakeInfo));
    getProposals(props.address);
    getDepositedUSTInAnchor(props.address);
    }
},[props.address])

const getProposals =(address) =>{
  terra.terraClient.apiRequester.get(`/gov/proposals`,{'depositor' :`${address}`}).then((info) =>setProposals(info.result) );
}
const mydelegations = () =>{
  return staked.myDelegations.map((delegation)=>{
    return <Fragment>
      <div className="delegation boxProp">
      <span>{`Amount Delegated : ${toInteger(delegation.amountDelegated)}`} </span>
      <span>{`Total Rewards : ${toInteger(delegation.totalReward)}`}</span>
      <span>{`Validator Name : ${delegation.validatorName}`}</span>
      </div>
      </Fragment>
  })
}

const getDepositedUSTInAnchor = async(address) =>{
  const data = {'query': `{\n  tokenBalance: WasmContractsContractAddressStore(\n    ContractAddress: \"terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc\"\n    QueryMsg: \"{\\\"balance\\\":{\\\"address\\\":\\\"${address}\\\"}}\"\n  ) {\n    Result\n    Height\n  }\n}\n`,
  'variables': {}
}
 const response = await fetch(`${terra.AnchorProtocol}/?cw20--balance=${address}`,{
   method: 'POST', 
   mode: 'cors',
   headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
   body:JSON.stringify(data)});
  const json = await response.json();
  setUstInAnchor(json.data.tokenBalance.Result);
 
}
const calculateScore = () =>{
  setScore(scoreCalculator(staked?.rewards.total,staked,proposals,ustInAnchor));
  }
    return (
  <div className="landing">  
  {/* {calculateScore()} */}
     {props.show && ustInAnchor && <div className="usTAnchor"><img src={anchorimg}/> {`ANC STAKED : ${toInteger(JSON.parse(ustInAnchor).balance)}`}</div>}  
      {!props.show  ? <Login setAdd={props.setAdd} />  :
     (coins && coins.toArray().length) ?
      <div className="Metrics"> 
      {coins.toArray().map((coin : Coin,index:number) =><Metrics key ={index} coin={{coin}}  />)}
      </div> : null }
      <div className="staking ">
      {props.show && staked &&  <div className="information boxProp">         
            <div>Available Luna For Delegation : {toInteger(staked?.availableLuna)} </div>
           <div>Rewards : {toInteger(staked?.rewards?.total)} </div>
        </div>}
        {props.show && proposals && proposals.length && <Proposal result={proposals} />} 
    </div>
    {props.show && staked && mydelegations()}
    {props.show && staked && ustInAnchor && proposals && <Score staked={staked} ustInAnchor={ustInAnchor} proposals={proposals} rewards={staked.rewards.total}/>}
    </div>

    );
}
  

export default Landing;




