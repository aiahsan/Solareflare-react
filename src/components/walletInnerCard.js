import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {useHistory} from 'react-router-dom'
const Card= ({ img, lbl, btntxt, onClick,haslbl }) => {
    const history=useHistory();
    return <div className="wallet-cst-bx">
        <div className="row">
            <div className="col-md-4">
                <img alt="" src={img} className="w-100 cset-sdfj4350" />
            </div>
            <div className="col-md-8">
                {
                    haslbl===true?                <p style={{ height: 36 }} className="cst-sadf90-432">{lbl}</p>:<><input className="form-control mb-3" type="text" placeholder="Key"/>
                    </>
                }
                <button   className="cst-sfas30-3122 text-uppercase font-size-normal font-weight-bold btn btn-primary btn-block btn-lg ft-95rem" onClick={()=>{history.push("wallet")}}>{btntxt} <span>
                    <IoIosArrowForward />
                </span></button>
            </div>
        </div>
    </div>
}
export default Card;