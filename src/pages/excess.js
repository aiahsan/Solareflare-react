import React from 'react'
import Navbar from '../components/navbar1'
import Wallet from '../components/walletCard'
const Excess= ()=>{
    return <div style={{backgroundColor:'#f6f7fa',height:'100vh'}}>
    
    <Navbar/>
    <div className="container wallet-page d-flex justify-content-center text-center " style={{}}>
<h4 className="mb-5">ACCESS WALLET
</h4>
<Wallet/>
<p className="mt-5 ft-12px text-secondary-1">Please be aware that Windows users might encounter issues when using Ledger Nano X. We're working on a way around this and will be announcing a fix ASAP!
</p>
<button className="ft-13px text-primary-1">CREATE ONE HERE</button>
    </div>
    </div>
}

export default Excess;