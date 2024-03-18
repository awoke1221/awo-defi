import Web3Modal from "web3modal";
//import { ethers } from "ethers";
import { ethers } from 'ethers';
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";




const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK, 
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: process.env.INFURA_KEY 
    }
  },
  
 };


  async function connectYourWallet(){
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions
      })
      const web3modalInstance = await web3Modal.connect()
      const web3modalprovider = new ethers.providers.Web3Provider(web3modalInstance)
      if (web3modalprovider) {
        setWeb3Provider(web3modalprovider);
      }
    } catch (error) {
      console.log(error)
    }
  }




export default connectYourWallet;
