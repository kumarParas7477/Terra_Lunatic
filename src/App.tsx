import './App.css';
import Landing  from './components/Landing';
import Navbar from './components/Navbar';
import LunaContext from './context/TerraContext';
import { LCDClient } from '@terra-money/terra.js';
import "./Styles/output.css";
import { useEffect, useState } from 'react';
import getItem from './util/dom';
import { useWallet } from '@terra-dev/use-wallet';


function App() {

  const [address,setAddress] = useState(null);
  const {status} = useWallet();
  const [tokens,setTokens] = useState([]);

  const terra  = new LCDClient({
    URL: 'https://bombay-fcd.terra.dev',
    chainID: 'bombay-12',
  });
  useEffect(()=>{
    let address = getItem("walletconnect",true);
    if(address && address.accounts.length){
      setAddress(address.accounts[0])
    }
    let addressReadOnly = getItem("__terra-readonly-wallet-storage-key__",true); 
    if(addressReadOnly){
      setAddress(addressReadOnly.terraAddress);
    }
    let extension = getItem("__terra_chrome_extension_wallet_address__");
      if(extension){
        setAddress(extension);
      }
  },[status])

  const walletAddress = (add) =>{
setAddress(add);
  }
 


  return (  
    <LunaContext.Provider value={{terraClient : terra,AnchorProtocol: 'https://bombay-mantle.terra.dev' }} >  
    <Navbar  address ={address} show={Boolean(address)} setAdd={walletAddress}/>
    <Landing address={address} show={Boolean(address)} setAdd ={walletAddress} />
   {/* <Footer /> */}
   </LunaContext.Provider>
  );
}

export default App;
