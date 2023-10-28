'use client'
import { createContext, useContext, useEffect } from "react";
import {  ABI } from "@/constants";
import Web3 from 'web3';
import {ethers} from 'ethers';
import { useWalletContext } from "./Web3ModalProvider";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
     // fetching the address and abi from the smart contracts
    // const CONTRACT_ADDRESS="xdc2DdF6241e37f261f45520eA03E2D2cF360B9012E";
    const CONTRACT_ADDRESS="0xa6369e425a78048385816caEa27DB99350e52528";
    const CONTRACT_ABI=ABI;



    // const testnetProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_APOTHEM_NETWORK_URL)
    // const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_APOTHEM_PRIVATE_KEY, testnetProvider)
    // const walletSigner = wallet.connect(testnetProvider)

    // we are using our address as a recipient, but you can use any address you want
    // const recipient_address = wallet.address;
    // const number_of_tokens = ethers.utils.parseUnits('10', 18)
    // const web3=new Web3(
    //     Web3.givenProvider||'https://rpc.apothem.network'
    // );

    // // defining the contract
    // const contract=new web3.eth.Contract(
    //     CONTRACT_ABI,CONTRACT_ADDRESS
    // );

    // fetching information form the wallet
    const {connected,account}=useWalletContext() 

    // console.log("contract",contract);

    const mintNft=async(form)=>{
        console.log("NFt mint initiated",form);
        // logic to mint an nft to the contract
        if(connected)
        {
            try{
                // const contract = new ethers.Contract(
                //     CONTRACT_ADDRESS,
                //     CONTRACT_ABI,
                //     walletSigner
                // );
                // const receipt = await contract.createEscrow(form.amount,1000);
                // console.log(receipt);
                console.log("window.etherium",window.ethereum);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const contractInstance = new ethers.Contract (
                  CONTRACT_ADDRESS, CONTRACT_ABI, signer
                );
                console.log("Here");
                const tx = await contractInstance.createEscrow(form.amount,1000);
                console.log(tx);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
        else{
            console.log("The wallet is not connected");
        }

    }

    const lockFunds=async()=>{
        // a function to lock funds in the escrow
        console.log("fund locking initiated");
        if(connected)
        {
            try{

            }
            catch(e)
            {
                console.log(e);
            }
        }
        else{
            console.log("wallet is not connected");
        }
    }
    return (
        <StateContext.Provider value={{mintNft,lockFunds}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateProvider=()=>(useContext(StateContext));