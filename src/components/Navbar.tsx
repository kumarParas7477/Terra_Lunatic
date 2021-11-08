
import { useWallet } from "@terra-dev/use-wallet";
import image from "./../assets/download.png";
import "./Navbar.css";  

const Navbar = (props) =>{
  const {disconnect} = useWallet();
      const disconnectWallet =() =>{
        disconnect();
        props.setAdd(null);
        localStorage.clear();
      }   
  return (
   <div className="nav">
   <div className="heading">
   <img  className="image" src={image} />
   <h1>Terra</h1>
   </div>

{props.show   && <div className="address">{props.address.slice(0,4)+"..."+props.address.slice(-7)}</div>}
{props.show  && <button className="disconnect_button" onClick={disconnectWallet}>Disconnect</button>}
   </div>
  )}


export default Navbar;