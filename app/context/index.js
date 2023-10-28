'use client'
import { createContext, useContext, useEffect, useState } from "react";
import {  ABI } from "@/constants";
import Web3 from 'web3';
import {ethers} from 'ethers';
import { useWalletContext } from "./Web3ModalProvider";
import axios from "axios";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    // url of the website
    const url=process.env.NEXT_PUBLIC_URL;
    console.log("url",url);
     // fetching the address and abi from the smart contracts
    // const CONTRACT_ADDRESS="xdc2DdF6241e37f261f45520eA03E2D2cF360B9012E";
    const CONTRACT_ADDRESS="0xa6369e425a78048385816caEa27DB99350e52528";
    const CONTRACT_ABI=ABI;

    const [escrowData,setEscrowData]=useState([]);
    // to fetch all the escrows
    const fetchData=async()=>{
        try{
            const data=await axios.get(`${url}api/allEscrows`);
            setEscrowData(data.data.message);
        }
        catch(e)
        {
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchData();
    },[url]);

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
                console.log("window.etherium",window.ethereum);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const contractInstance = new ethers.Contract (
                  CONTRACT_ADDRESS, CONTRACT_ABI, signer
                );
                console.log("Here");
                const tx = await contractInstance.createEscrow(form.amount,1000);
                const res=await axios.post(`${url}api/create`, {...form,client:"none",status:"pending",tokenId:"10"});
                console.log(res);
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

    const lockFunds=async(Escrow)=>{
        // a function to lock funds in the escrow
        console.log("fund locking initiated",Escrow);
        if(connected)
        {
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const contractInstance = new ethers.Contract (
                  CONTRACT_ADDRESS, CONTRACT_ABI, signer
                );
                const confirmPaymentTx = await contractInstance.confirmPayment(Escrow.tokenId, {
                    value: ethers.utils.parseUnits(Escrow.amount.toString(), /* decimals */ 18), 
                    gasLimit: 300000 
                  });
                console.log(confirmPaymentTx);
                const res=await axios.post(`${url}api/addClient`, {tokenId:Escrow.tokenId,account:account});
                console.log(res);
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

    const confirmPayment=async (id)=>{
        console.log("funds are release initated",id);
        // a function to confirm the payment
        if(connected)
        {
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const contractInstance = new ethers.Contract (
                  CONTRACT_ADDRESS, CONTRACT_ABI, signer
                );
                const tx=contractInstance.confirmDelivery(id,{
                    gasLimit: 300000 
                });
                const res=await axios.post(`${url}api/approve`, {tokenId:id});
                console.log(res);
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
        <StateContext.Provider value={{mintNft,lockFunds,confirmPayment,escrowData,connected}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateProvider=()=>(useContext(StateContext));