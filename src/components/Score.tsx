import scoreCalculator from "../util/scoreCalculator";

const Score = (props) =>{

    const score =scoreCalculator(props.rewards,props.staked,props.proposals,props.ustInAnchor);

    return (
        <div style={{color:'rgb(110, 97, 187)',display:'flex',justifyContent:'center',fontSize:'4rem'}}>{`Your Lunatic Score : ${score}`}</div>
    )
}

export default Score;