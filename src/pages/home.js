import React from 'react'
import Navbar from '../components/navbar'
import ImgBack from '../images/heroBg.png'
import Intro from '../images/intro.png'
import WallertCard from '../components/walletCard';
import Easy from '../images/easy.png'
import AccordCard from '../components/accoridanCard'
import {repository} from '../utiles/repository'
import Footer from '../components/footer'
const Home= () => {

    const [pricedata,setpricedata]=React.useState(undefined);
  React.useEffect(()=>{
      (async ()=>{
     const {data,status}=  await repository.price().then(x=>x);
      if(status===200)
      {
        setpricedata(data);
      }
      })();
  },[])

  return <>
    <Navbar />

    <div>
      <div className="container mt-4per">
        <div className="row">
          <div className="col-md-6" style={{zIndex:1}}>
            <div className="bnrtext">
              <h1 className="hero__title">SolFlare</h1>
              <h4 className="hero__subtitle">A non-custodial wallet for Solana</h4>
              <p className="hero__bodyText">SolFlare is a simple and intuitive interface that helps you connect to the Solana blockchain and manage your SOL.</p>
              <button type="button" className="btn btn-lighting btn2 mt-5 p-cst-1">create a wallet</button>
              <button type="button" className="btn btn-lighting btn4 mt-5 p-cst-1 csajs-35j">access a wallet</button>
            </div>
          </div>

          <div className="col-md-6" style={{zIndex:1}}>
            <img alt="" src={Intro} className="hero-intro" />
          </div>

        </div>

      </div>
      <img src={ImgBack} alt="" className="hero-bg" style={{zIndex:0}} />

      <section className="banner mt-5 mx-auto " id="transfer">
        <div className="container">
          <div className="row stats-inner text-center">
            <div className="col-md-3 py-4 text-center stats-item">
              <div className="">
                <h3 className="cst-tre-sd">{pricedata&&pricedata.usd?pricedata.usd:""}</h3>
                <p className="ft-12px text-primary-1 font-weight-bold font-size-sm">USD</p>
              </div>
            </div>
            <div className="col-md-3 py-4 text-center stats-item">
              <div className="">
              <h3 className="cst-tre-sd">{pricedata&&pricedata.usd_market_cap?pricedata.usd_market_cap:""}</h3>
                <p className="ft-12px text-primary-1 font-weight-bold font-size-sm">Usd Market Cap</p>
              </div>
            </div>
            <div className="col-md-3 py-4 text-center stats-item">
              <div className="">
              <h3 className="cst-tre-sd">{pricedata&&pricedata.usd_24h_vol?pricedata.usd_24h_vol:""}</h3>
                <p className="ft-12px text-primary-1 font-weight-bold font-size-sm">usd 24h vol</p>
              </div>
            </div>
            <div className="col-md-3 py-4 text-center stats-item">
              <div className="">
              <h3 className="cst-tre-sd">{pricedata&&pricedata.usd_24h_change?pricedata.usd_24h_change:""}</h3>
                <p className="ft-12px text-primary-1 font-weight-bold font-size-sm" >usd 24h change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="stakingAccounts" className="text-center mx-auto">
        <h2 className="font-weight-bold ft-25rem">SolFlare Staking Accounts</h2>
        <p className="text-secondary-1 ft-we600  ">You can now see in real-time how fast SolFlare is gaining traction! <br></br>
        </p>
        <p className="text-secondary-1 ft-we600 ">The graph below shows a visual representation of the number of SolFlare accounts, compared to the total number of staking accounts that currently exist on  Solana.</p>

        <a className="text-primary-1  font-size-sm text-center ft-we600" href="/create-wallet">STAKE NOW &gt;</a></section> */}

      <section id="intro" className="text-center mx-auto">
        <h2 className="font-weight-bold">Introducing SolFlare
</h2>
        <p className="text-secondary-1 ft-we600  ">SolFlare is the first digital wallet created exclusively for Solana. We designed this wallet to be a simple and elegant solution for Solana users that want to easily access and manage their tokens.

<br></br>
        </p>
        <p className="text-secondary-1 ft-we600 ">With SolFlare you can now generate and access your free, non-custodial, digital wallet and easily stake your SOL!</p>

        <a className="text-primary-1  font-size-sm text-center ft-we600 ft-95rem" href="/create-wallet">Try Now &gt;</a></section>

      <section className="container" id="onboarding">
        <div className="row">
          <div className="col-md-6">
            <div className="bodyText">
              <h2 className="font-weight-bold ft-25rem">Easy to Use</h2>
              <p className="text-secondary-1 ft-we600 ft-13px mt-4">SolFlare was built with a focus on accessibility. The wallet is easy to use and allows you to safely access your digital wallet and manage your tokens.

<br>
                </br>

              </p>
              <p className="text-secondary-1 ft-we600 ft-13px mt-4">
                We understand that the crypto world can be needlessly complex at times, so we created SolFlare to be a simple and enjoyable experience. We will guide you through the onboarding process using plain English, rather than industry-specific terminology.

            </p>
            </div>

          </div>
          <div className="col-md-6">

            <WallertCard />
          </div>
        </div>
      </section>
      <section className="container" id="onboarding">
        <div className="row">
          <div className="col-md-6">

            <img alt="" src={Easy} className="w-100" />
          </div>
          <div className="col-md-6">

            <div className="bodyText p-3" >
              <h2 className="font-weight-bold ft-25rem">Staking made easy</h2>
              <p className="text-secondary-1 ft-we600 ft-13px mt-5">SolFlare is the first wallet that allows users to also stake their SOL.
<br>
                </br>



              </p>
              <p className="text-secondary-1 ft-we600 ft-13px mt-3">
                The process of staking used to require the use of a command-line interface, but with SolFlare it becomes an intuitive experience that takes only a couple of minutes!

</p>
            </div>          </div>
        </div>
      </section>
      <section className="container" id="faq">
        <h3 className="font-weight-bold">FAQ</h3>

        <p className="text-secondary">Below you’ll find some of the frequently asked questions. If you still need help, feel free to reach us using the contact form at the bottom of the page</p>
        <div id="accordian">
          <AccordCard />
        </div>
      </section>
      <section id="contact" className="banner m-auto">
        <div className="container">
          <div className="text3 text-center">
            <h1>Get in touch</h1>
            <p className="lb-contact-frm">Still have questions? Want to just say hello? Fill the form out and we’ll be in <br></br> touch!
                </p>
          </div>
          <form className="form-inline justify-content-center  mt-3 ">
            <div className="form-group mx-sm-3 mb-2 w-100">
              <label htmlFor="Name" className="sr-only">Name</label>
              <input type="Name" className="form-control p-4 w-100" id="Name" placeholder="Name" />
            </div>

            <div className="form-group mx-sm-3 mb-2 w-100">
              <label htmlFor="Email" className="sr-only">Email</label>
              <input type="Email" className="form-control p-4 w-100" id="Email" placeholder="Email" />
            </div>
          </form>

          <div className="form-massage mt-3">
            <div className="form-group d-flex justify-content-center">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control " id="exampleFormControlTextarea1" rows="4" placeholder="Massege"
                style={{ width: 480 }}></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <button className="bt-sbmit btn" type="submit">Submit</button>

          </div>
        </div>
      </section>
      <hr></hr>

  <Footer/>
    </div>
  </>
}

export default Home;