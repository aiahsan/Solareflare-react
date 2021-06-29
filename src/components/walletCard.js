import React from 'react';
import WalletCard from './walletInnerCard'
import Folder from '../images/folder.png'
import Punch from '../images/punch.png'
const Card= ()=>{
    const [active,setActive]=React.useState(0)
    return <>
    <div className="d-flex">
        <div onClick={()=>{
            setActive(1)
        }} className={`wallet-btn ${active===1?"wallet-btn-active":""}`}><span>Using Keystore File</span></div>
        <div onClick={()=>{
            setActive(0)
        }} className={`wallet-btn ${active===0?"wallet-btn-active":""}`}><span>Using Ledger Nano S | Ledger Nano X</span></div>
    </div>
{
    active===1? <WalletCard img={Folder} haslbl={true} lbl="Create a wallet using a keystore file" btntxt="Next"/>:    <WalletCard img={Punch} haslbl={false} lbl="Access your SolFlare using your Ledger Nano S or Ledger Nano X hardware wallet
    " btntxt="Access"/>
}
    </>
}
export default Card;