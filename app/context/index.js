'use client'
import { createContext, useContext } from "react";
import {  ABI } from "@/constants";
import Web3 from 'web3';

const StateContext=createContext();

export const StateContextProvider=({children})=>{
     // fetching the address and abi from the smart contracts
    // const CONTRACT_ADDRESS="xdc2DdF6241e37f261f45520eA03E2D2cF360B9012E";
    const CONTRACT_ADDRESS="0x2DdF6241e37f261f45520eA03E2D2cF360B9012E";
    const CONTRACT_ABI=ABI;
    
    const web3=new Web3(
        Web3.givenProvider||'https://rpc.apothem.network'
    );

    // defining the contract
    const contract=new web3.eth.Contract(
        CONTRACT_ABI,CONTRACT_ADDRESS
    );

    console.log("contract",contract);

    const mintNft=(form)=>{
        console.log("NFt mint initiated",form);
        // logic to mint an nft to the contract

    }
    return (
        <StateContext.Provider value={{mintNft}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateProvider=()=>(useContext(StateContext));