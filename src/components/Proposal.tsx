import { Fragment } from "react"
import "./Proposal.css";
const Proposal =(props)=>{
    return (
        <Fragment>
        <table className={"tableStructure table table-dark"}>
            <thead>
            <tr>
                <th>Proposal Id</th>
                <th>Content</th>
                <th>Status</th>
            </tr>
            </thead>
<tbody>
            {props.result.map((proposal,index)=>{
              return  <tr key={index}>
                    <td>{proposal.id}</td>
                    <td>{proposal.content.value.title}</td>
                    <td>{proposal.status}</td>
                </tr>
            })}
              </tbody>
        </table>
        </Fragment>
    )
}

export default Proposal;