import React from 'react'
import { MdContentCopy } from 'react-icons/md'
import Navbar from '../components/navbar1'
import { useSelector } from 'react-redux'
import Loading from '../components/LoadingAnimation'
import { repository } from '../utiles/repository';
import Moment from 'moment'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Modal, Form as BForm, Row, Col } from 'react-bootstrap'
import ImgBack from '../images/heroBg.png'
import Footer from '../components/footer'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import animationData from "../animations/sucess.json";
import animationData1 from "../animations/failed.json";
import Lottie from "react-lottie";
import boopSfx from '../sounds/notification.mp3';

const DisplayingErrorMessagesSchema = Yup.object().shape({

    address: Yup.string()
        .required('Required'),
    amount: Yup.string()
        .required('Required'),
        token: Yup.string()
        .required('Required'),
});

const Dashboard = () => {
    const address = useSelector(x => x.address)
    const [showanimation, setshowanimation] = React.useState(false);
    const [balance, setBalance] = React.useState(undefined);
    const [transactions, setTransactions] = React.useState([]);
    const [price, setPrice] = React.useState(0);
   
    const [transactionstype, settransactionstype] = React.useState("all")
    const [nextCursor, setnextCursor] = React.useState("1618597681000");
    const [ShowModal, setShowModal] = React.useState(false);
    const [ShowModal1, setShowModal1] = React.useState(false);
    const [TransactionResult, setTransactionResult] = React.useState(false);
    const audioEl = document.getElementsByClassName("audio-element")[0]
        
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
    
        },
      };
      const defaultOptions1 = {
        loop: false,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    React.useEffect(() => {
        setshowanimation(true)




        try {
            (async () => {
                console.log(address)
                const data1 = await repository.getBalance(address ? address : "")
                console.log(data1, "")
                if (data1.status === 200) {
                    setBalance(data1.data)
                }
                setshowanimation(false)

            })();
            (async () => {
                const data2 = await repository.price()
                if (data2.status === 200) {

                    setPrice(parseFloat(data2.data.usd.split(' ')[0]))
                    console.log(parseFloat(data2.data.usd.split(' ')[0]));
                }
                setshowanimation(false)

            })();
            (async () => {
                const { data, status } = await repository.getTransaction(address ? address : "", nextCursor)
                if (status === 200) {
                    console.log(data.txs);
                    setTransactions(data.txs);
                    setnextCursor(data.nextCursor);

                }
                setshowanimation(false)

            })();

        }
        catch (e) {
            console.log(e)
            setshowanimation(false)
        }
    }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setshowanimation(true)
            try {
                (async () => {
                    const data1 = await repository.getBalance(address ? address : "")
                    if (data1.status === 200) {
                        setBalance(data1.data)
                    }
                    setshowanimation(false)

                })();
                (async () => {
                    const data2 = await repository.price()
                    if (data2.status === 200) {

                        setPrice(parseFloat(data2.data.usd.split(' ')[0]))
                    }
                    setshowanimation(false)

                })();
                (async () => {
                    const { data, status } = await repository.getTransaction(address ? address : "", nextCursor)
                    console.log(data, status)
                    if (status === 200) {
                        setTransactions([...data.txs, ...transactions]);

                        setnextCursor(data.nextCursor);
                        setshowanimation(false)

                    }
                    else {
                        setshowanimation(false)

                    }
                })()
            }
            catch (e) {
                setshowanimation(false)
            }
        }, 60000);
        return () => clearInterval(timer);
    })
    const posttransaction = async (datapost) => {
        setshowanimation(true)
        const { data, status } = await repository.sendTransaction(datapost).then(x => x);
        console.log(data, status)
        if (status === 200) {
            audioEl.play()
            setshowanimation(false)
            setShowModal(false)
            setTransactionResult(true);
            setShowModal1(true)
        }
        else {
            audioEl.play()
            setshowanimation(false)
            setShowModal(false)
            setTransactionResult(false);
            setShowModal1(true)
        
        }


    }

    return <div className=" " style={{ backgroundColor: '#f7f7f7' }} >
        {showanimation ? <Loading />
            : <>
 <audio className="audio-element">
          <source src={boopSfx}></source>
        </audio>
                <Navbar type={true} />
                <img src={ImgBack} alt="" className="hero-bg" style={{ zIndex: 0 }} />

                <section className="pad-lr">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col col-12">
                                <div className="card-cst-dsh py-2 mt-5 cshsfoie-sdc9ewr">
                                    <div className="card-cst-dsh-body px-5">
                                        <h3 className="card-cst-dsh-title mb-4">Your Address</h3>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-10">
                                                <p className="card-cst-dsh-text card-cst-dsh-1-text">
                                                    {address ? address : ""}
                                                </p>

                                            </div>
                                            <div className="col-2">
                                                <CopyToClipboard text={address}  >
                                                    <MdContentCopy style={{ cursor: 'pointer' }} className="copybtnn-asfaf" />
                                                </CopyToClipboard>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="card-cst-dsh py-2 mt-5 cshsfoie-sdc9ewr">
                                    <div className="px-5">
                                        <h3 className="card-cst-dsh-title">Your Balance</h3>
                                        <p className="card-cst-dsh-text card-cst-dsh-2-text m-0">{balance && balance.balance ? balance.balance : ""} <sub>${balance && balance.balance ? (parseFloat(balance.balance.split(' ')[0]) *price).toFixed(2): "0"}</sub></p>
                                        <p className="card-cst-dsh-text clr-cafoeji3">{balance && balance.formatted ? balance.formatted.split(' ')[2] : "ADA"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="card-cst-dsh py-2 mt-5 cshsfoie-sdc9ewr">
                                    <div className="px-5">
                                        <h3 className="card-cst-dsh-title">Tokens Balance</h3>
                                        <table className="trs-table table table-borderless table-responsive" >
                                            <thead>
                                                <tr>
                                                    <th>Token Name</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                             balance&&balance.tokensBalance&&balance.tokensBalance? Object.entries(balance.tokensBalance).map(([key, value]) => <tr key={key}>  <td>{key}</td> <td>{value}</td></tr>)
                                            :<></>   
                                            }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card-cst-dsh back-color-csaasdo3 mt-5 dsp-cstss-flex">
                                    <button onClick={() => { setShowModal(true) }} className="btn">
                                        <div className="card-cst-dsh-body">
                                            <p className="text-white text-center card-cst-dsh-text">TRANSFER SOL</p>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <section className="container ">
                    <div className="card-cst-dsh-123 container-fluid mt-5 p-4 cshsfoie-sdc9ewr" style={{ width: '96%' }}>
                        <div className="row">
                            <div className="col-12 safas-349asfj232">
                                <div>            <h3 className="card-cst-dsh-1-text">Your Transactions</h3>
                                </div>
                                <div>
                                    <div className="d-flex justify-space-around">
                                        <div onClick={() => settransactionstype("all")} className={`tab-lbl-cst ${transactionstype == "all" ? "tab-lbl-cst-active" : ""}`}>All</div>
                                        <div onClick={() => settransactionstype("sent")} className={`tab-lbl-cst ${transactionstype == "sent" ? "tab-lbl-cst-active" : ""}`} >Sent</div>
                                        <div onClick={() => settransactionstype("received")} className={`tab-lbl-cst ${transactionstype == "received" ? "tab-lbl-cst-active" : ""}`}>Received</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between mt-3">
                                <table className="trs-table table table-borderless table-responsive">
                                    <thead>
                                        <tr className="w-100">
                                            <th scope="col">TYPE</th>
                                            <th scope="col" className="plre-sda">DATE</th>
                                            <th scope="col">AMOUNT</th>
                                            <th scope="col">FEE</th>
                                            <th scope="col">FROM</th>
                                            <th scope="col">TO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            transactionstype == "all" ? transactions.map((x, i) => <tr key={i}>
                                                <td>{x.type}</td>
                                                <td>{Moment(x.date).format("yyyy-mm-DD")}</td>
                                                <td>{x.amount}</td>
                                                <td>{x.fee}</td>
                                                <td>{x.from.map((y, j) => <div key={j} className="d-flex align-items-center">
                                                    <p className="card-cst-dsh-1-text" style={{ padding: 0, margin: 0, width: 250 }}>{y}</p>
                                                    <CopyToClipboard text={y}  >
                                                        <MdContentCopy style={{ cursor: 'pointer' }} className="copybtnn-asfaf" />
                                                    </CopyToClipboard>
                                                </div>)}</td>
                                                <td className="card-cst-dsh-1-text" >

                                                    <div className="d-flex align-items-center">
                                                        <p className="card-cst-dsh-1-text" style={{ padding: 0, margin: 0, width: 250 }}>{x.to}</p>
                                                        <CopyToClipboard text={x.to}  >
                                                            <MdContentCopy style={{ cursor: 'pointer' }} className="copybtnn-asfaf" />
                                                        </CopyToClipboard>
                                                    </div>

                                                </td>
                                            </tr>) : <>
                                                {
                                                    transactions.filter(x => x.sent == (transactionstype == "sent" ? true : false)).map((x, i) => <tr key={i}>
                                                        <td>{x.type}</td>
                                                        <td>{Moment(x.date).format("yyyy-mm-DD")}</td>
                                                        <td>{x.amount}</td>
                                                        <td>{x.fee}</td>
                                                        <td>{x.from.map((y, j) => <div key={j} className="d-flex align-items-center">
                                                            <p className="card-cst-dsh-1-text" style={{ padding: 0, margin: 0, width: 250 }}>{y}</p>
                                                            <CopyToClipboard text={y}  >
                                                                <MdContentCopy style={{ cursor: 'pointer' }} className="copybtnn-asfaf" />
                                                            </CopyToClipboard>
                                                        </div>)}</td>
                                                        <td className="card-cst-dsh-1-text" >

                                                            <div className="d-flex align-items-center">
                                                                <p className="card-cst-dsh-1-text" style={{ padding: 0, margin: 0, width: 250 }}>{x.to}</p>
                                                                <CopyToClipboard text={x.to}  >
                                                                    <MdContentCopy style={{ cursor: 'pointer' }} className="copybtnn-asfaf" />
                                                                </CopyToClipboard>
                                                            </div>

                                                        </td>
                                                    </tr>)
                                                }

                                            </>
                                        }

                                    </tbody>
                                </table>
                            </div>
                            {
                                transactions.length === 0 ? <div className="col-12 d-flex justify-content-center mt-2">
                                    <h6 className="text-secondary">No Transactions</h6>
                                </div> : ""
                            }

                        </div>
                    </div>
                </section>

                {/* <section>
            <div className="card-cst-dsh-123 container-fluid mt-5 p-4" style={{ width: '96%' }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div>            <h3 className="card-cst-dsh-1-text">Your Stacking accounts</h3>
                        </div>
                        <div>
                            <div className="d-flex justify-space-around">
                                <div className="tab-lbl-cst tab-lbl-cst-active-1 "><IoReloadCircle style={{fontSize:22}}/> Reload</div>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between mt-3">
                    <table className="trs-table-1 table table-borderless table-striped table-responsive-lg">
                            <thead>
                                <tr>
                                    <th scope="col">Account</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Validator</th>
                                    <th scope="col">Seed</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                               <tr>
                                   <td>Dy3vP1oawqr3KuvUUWp443Q2rBWxgvet9GfDJthYEeGJ</td>
                                   <td>
                                   <p>0.026 SOL</p>
                                   <p className="ft-sizep7" >$0.714</p>
                                   </td>
                                   <td>
                                   <p>Everstake</p>
                                   <a href className="ft-sizep7">https://everstake.one</a>
                                   </td>
                                   <td>stake:0</td>
                                   <td>Delegated</td>
                                   </tr>
                                   <tr>
                                   <td>Dy3vP1oawqr3KuvUUWp443Q2rBWxgvet9GfDJthYEeGJ</td>
                                   <td>
                                   <p>0.026 SOL</p>
                                   <p className="ft-sizep7" >$0.714</p>
                                   </td>
                                   <td>
                                   <p>Everstake</p>
                                   <a className="ft-sizep7">https://everstake.one</a>
                                   </td>
                                   <td>stake:0</td>
                                   <td>Delegated</td>
                                   </tr>
                                   <tr>
                                   <td>Dy3vP1oawqr3KuvUUWp443Q2rBWxgvet9GfDJthYEeGJ</td>
                                   <td>
                                   <p>0.026 SOL</p>
                                   <p className="ft-sizep7" >$0.714</p>
                                   </td>
                                   <td>
                                   <p>Everstake</p>
                                   <a className="ft-sizep7">https://everstake.one</a>
                                   </td>
                                   <td>stake:0</td>
                                   <td>Delegated</td>
                                   </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-2">
                        <button className="btn asbfas-34bWAMD">
                        <h6 className="text-secondary p-0 m-0">View All</h6>
                        </button>
                     </div>
                </div>
                       </div>
        </section> */}

            </>}
        <Modal
            show={ShowModal} onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                    <h3 className="card-cst-dsh-1-text text-center">Transfer SOL</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        token: "",
                        amount: "",
                        address: "",


                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await posttransaction(values)

                    }}
                >

                    {({ errors, touched, getFieldProps, setFieldValue, values, handleSubmit }) => {

                        return <>
                            <div>
                                <div className="form-group row mt-psad"     >
                                    <BForm.Label column sm="3">
                                        Select Token
    </BForm.Label>
                                    <Col sm="9">
                                        <select onChange={(e) => {
                                            setFieldValue("token", e.currentTarget.value)
                                        }} className="form-control">
                                            <option>Select Token</option>
                                            
                                            {balance&&balance.tokensBalance?Object.entries(balance.tokensBalance).map(([key, value]) => <option value={key} >{key}</option>)
                                        :<></>    
                                        }
                                        </select>
                                        {touched.token && errors.token && <div style={{ color: 'red', marginTop: 10, textAlign: 'left' }}>{errors.token}</div>}

                                    </Col>
                                </div>

                                <div className="form-group row mt-psad "    >
                                    <BForm.Label column sm="3">
                                        Amount
    </BForm.Label>
                                    <Col sm="9">
                                        <input {...getFieldProps("amount")} className="form-control" placeholder="Amount" />
                                        {touched.amount && errors.amount && <div style={{ color: 'red', marginTop: 10, textAlign: 'left' }}>{errors.amount}</div>}
                                    </Col>
                                </div>
                                <div className="form-group row mt-psad mb-psad "   >
                                    <BForm.Label column sm="3">
                                        Destination Address
    </BForm.Label>
                                    <Col sm="9">
                                        <input {...getFieldProps("address")} className="form-control" placeholder="Address" />
                                        {touched.address && errors.address && <div style={{ color: 'red', marginTop: 10, textAlign: 'left' }}>{errors.address}</div>}
                                    </Col>
                                </div>

                            </div>
                            <Modal.Footer>
                                <button onClick={() => handleSubmit()} className="btn btn2">Transfer SOL</button>
                            </Modal.Footer>
                        </>

                    }}
                </Formik>

            </Modal.Body>

        </Modal>

        <Modal show={ShowModal1} onHide={()=>setShowModal1(false)}>
        <Modal.Header closeButton>
                {TransactionResult==true?<div>
                    <div className="cssdafj-34hsa" >
                    <Lottie style={{width:100}}   options={defaultOptions} />
                    <h4>Transaction sent successfully!</h4>

                    </div>

                </div>:<div>
                    <div className="cssdafj-34hsa" >
                    <Lottie style={{width:100}}    options={defaultOptions1} />
                    <h4>Error sending transaction</h4>

                    </div>

                </div>}
        </Modal.Header>
        
         </Modal>
        <Footer />
    </div>
}
export default Dashboard;