import { Proposal } from "@terra-money/terra.js";
import toInteger from "./numberConversion";

const scoreCalculator = (rewards,staked,proposals,StakedAnchor) =>{

    let score =0;
    score += calculateProposalsScrore(proposals);
    if(StakedAnchor)
    score += anchorStakeScore(JSON.parse(StakedAnchor).balance);
    score += Number(toInteger(rewards));
    score += stakeFundScore(staked);

    
    return Number(score);
}
const calculateProposalsScrore= (proposals : Proposal[]) =>{

    let score = 0;
    proposals.forEach((prop :Proposal)=>{
        prop.total_deposit.map((c)=> score+=parseInt(toInteger(c.amount)))
    })
    return score;

}

const stakeFundScore = (stake)=>{
    let score = 0;
stake.myDelegations.forEach(fund =>{
 score += parseInt(toInteger(fund.amountDelegated))
})

return score;
}

const anchorStakeScore= (no) =>{
return parseFloat(toInteger(no)) ;
}

export default scoreCalculator;