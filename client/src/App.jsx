import { useState,useEffect } from 'react'
import abi from "./contractJson/coffee.json"
import {ethers} from "ethers"
import Footer from './components/Footer/Footer.jsx'
import Memos from './components/Memos.jsx'
import Buy from './components/Buy.jsx'
import './App.css'
import Home from './components/Home/Home.jsx'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0x6a9242d2Cd29e97facC027e80d0726145B409E03";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on sepolia testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div >
      <Home></Home>

    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
      <Buy state={state} />
      <Memos state={state} />
      <Footer></Footer>
  </div>
  )
}

export default App

    // {/* <img src={chai} className="img-fluid" alt=".." width="100%" /> */}
// npx hardhat run --network sepolia .\scripts\deploy.js 