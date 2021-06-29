import React from 'react'
import Navbar from '../components/navbar1'
import Wallet from '../components/walletCard'
const Create= ()=>{
    return <div style={{backgroundColor:'#f6f7fa',height:'100vh'}}>
    
    <Navbar/>
    <div className="container wallet-page d-flex justify-content-center text-center " style={{}}>
<h4 className="mb-5">CREATE NEW WALLET
</h4>
<Wallet/>
<p className="mt-5 ft-12px text-secondary-1">Already have a wallet?</p>
<button className="ft-13px text-primary-1">ACCESS IT HERE</button>
    </div>
    </div>
}
export default Create;