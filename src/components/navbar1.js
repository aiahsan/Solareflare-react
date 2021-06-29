import React from 'react'
import { Navbar} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
const Nav= ({type}) => {
    const history=useHistory();
    const dispatch=useDispatch();
return <>

        <div >
            <Navbar collapseOnSelect expand="lg" style={{    zIndex: 1}}  >
             <div className="container pt-2">
                    <Navbar.Brand ><svg onClick={()=>history.push('/')}   width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.8919 24.9666L29.9929 31.0468L23.6926 26.2361C22.228 25.1225 20.1169 26.069 19.9621 27.912L18.9563 40L17.3425 28.1849C17.0883 26.3085 14.85 25.4955 13.4628 26.7706L0 39.1648L11.8104 25.3842C13.0539 23.9365 12.142 21.6759 10.2463 21.5145L0.0773726 20.5234L10.5116 18.8753C12.3299 18.6247 13.1589 16.4477 11.9762 15.0334L6.8751 8.95323L13.1699 13.7639C14.6345 14.8775 16.7456 13.931 16.9004 12.088L17.9117 0L19.52 11.8151C19.7797 13.6915 22.018 14.5045 23.3997 13.2294L36.868 0.835189L25.0521 14.6158C23.8086 16.0635 24.7261 18.3241 26.6217 18.4855L36.7907 19.4766L26.3509 21.1247C24.5326 21.3753 23.7092 23.5523 24.8919 24.9666Z" fill="url(#paint0_linear)"></path><path d="M54.8793 20.4454C54.6803 20.1614 54.4593 19.9164 54.205 19.7104C53.9508 19.5044 53.6855 19.3374 53.4037 19.2037C53.1218 19.0701 52.84 18.9699 52.5581 18.9086C52.2762 18.8474 52.0054 18.8084 51.7512 18.8029H51.7346H46.3186C45.8709 18.8029 45.5227 18.6692 45.274 18.4075C45.0253 18.1403 44.8982 17.7839 44.8982 17.3274C44.8982 16.8764 45.0253 16.5144 45.274 16.2416C45.5227 15.9688 45.8709 15.8296 46.3186 15.8296H54.3321V13.4576H46.3186C45.9372 13.4576 45.5283 13.5245 45.0861 13.6637C44.644 13.8029 44.235 14.02 43.8592 14.3318C43.4834 14.638 43.1684 15.0389 42.9197 15.5289C42.671 16.0189 42.5439 16.6202 42.5439 17.3329C42.5439 18.0456 42.671 18.647 42.9197 19.1369C43.1684 19.6269 43.4834 20.0278 43.8592 20.334C44.235 20.6403 44.644 20.8574 45.0861 20.9966C45.5283 21.1358 45.9372 21.2026 46.3186 21.2026H51.7346C51.9502 21.2026 52.1491 21.2416 52.326 21.314C52.5028 21.3864 52.6576 21.4922 52.7792 21.6258C52.9008 21.7594 53.0002 21.9153 53.0666 22.0991C53.1329 22.2828 53.166 22.4833 53.166 22.7004C53.166 23.1514 53.0389 23.5078 52.7902 23.775C52.5415 24.0423 52.1878 24.1759 51.7346 24.1759H42.6489V26.5478H51.7346C51.9889 26.5478 52.2597 26.52 52.5471 26.4588C52.8344 26.3975 53.1163 26.3029 53.3926 26.1748C53.669 26.0467 53.9398 25.8853 54.1995 25.6848C54.4593 25.4844 54.6859 25.2394 54.8793 24.9554C55.0727 24.6714 55.2275 24.3374 55.3435 23.9643C55.4596 23.5913 55.5204 23.1681 55.5204 22.7004C55.5204 22.2327 55.4651 21.8151 55.349 21.442C55.233 21.0634 55.0782 20.7349 54.8793 20.4454Z" fill="currentColor"></path><path d="M69.569 14.8218C69.0882 14.3374 68.5134 13.9588 67.8502 13.686C67.187 13.4131 66.4686 13.2739 65.6893 13.2739H62.5005C61.7212 13.2739 60.9972 13.4131 60.334 13.686C59.6708 13.9588 59.0961 14.3374 58.6153 14.8218C58.1344 15.3062 57.7531 15.8853 57.4768 16.5534C57.2005 17.2216 57.0623 17.9566 57.0623 18.7472V21.2472C57.0623 22.0434 57.2005 22.7784 57.4768 23.4465C57.7531 24.1147 58.1289 24.6938 58.6153 25.1782C59.0961 25.6626 59.6708 26.0412 60.334 26.314C60.9972 26.5868 61.7212 26.7205 62.5005 26.7205H65.6893C66.4686 26.7205 67.187 26.5868 67.8502 26.314C68.5134 26.0412 69.0827 25.6626 69.569 25.1782C70.0498 24.6938 70.4312 24.1147 70.702 23.4465C70.9728 22.7784 71.1109 22.0434 71.1109 21.2472V18.7472C71.1109 17.9566 70.9728 17.2272 70.702 16.5534C70.4312 15.8797 70.0498 15.3062 69.569 14.8218ZM68.7511 21.2528C68.7511 21.7205 68.6792 22.1436 68.53 22.5278C68.3808 22.9064 68.1708 23.235 67.9 23.5022C67.6292 23.775 67.3031 23.9811 66.9273 24.1314C66.5515 24.2817 66.1315 24.3541 65.6728 24.3541H62.5005C62.0418 24.3541 61.6217 24.2817 61.2459 24.1314C60.8701 23.9811 60.5441 23.775 60.2732 23.5022C60.0024 23.2294 59.7924 22.9064 59.6432 22.5278C59.494 22.1492 59.4221 21.726 59.4221 21.2528V18.7528C59.4221 18.2851 59.494 17.8619 59.6432 17.4777C59.7924 17.0991 60.0024 16.7706 60.2732 16.5033C60.5441 16.2305 60.8701 16.0245 61.2459 15.8741C61.6217 15.7238 62.0418 15.6514 62.5005 15.6514H65.6893C66.1425 15.6514 66.557 15.7238 66.9328 15.8741C67.3086 16.0245 67.6347 16.2305 67.9 16.5033C68.1708 16.7762 68.3753 17.0991 68.5245 17.4777C68.6737 17.8563 68.7455 18.2795 68.7455 18.7528V21.2528H68.7511Z" fill="currentColor"></path><path d="M75.7865 13.4576H73.4321V25.3452C73.4321 25.5178 73.4598 25.6737 73.5206 25.8184C73.5813 25.9632 73.6642 26.0913 73.7693 26.1971C73.8743 26.3028 74.0014 26.3864 74.1451 26.4476C74.2888 26.5089 74.449 26.5367 74.6148 26.5367H85.3586V24.1648H75.7865V13.4576Z" fill="currentColor"></path><path d="M87.8069 13.5467C87.6632 13.608 87.5361 13.6915 87.4311 13.8029C87.3261 13.9142 87.2432 14.0423 87.1824 14.1871C87.1216 14.3318 87.0939 14.4877 87.0939 14.6548V26.5423H89.4483V21.1971H98.8822V18.8084H89.4483V15.8352H98.8877V13.4632H88.2822C88.1108 13.4577 87.9506 13.4855 87.8069 13.5467Z" fill="currentColor"></path><path d="M103.143 13.4576H100.789V25.3452C100.789 25.5178 100.816 25.6737 100.877 25.8184C100.938 25.9632 101.021 26.0913 101.126 26.1971C101.231 26.3028 101.358 26.3864 101.502 26.4476C101.645 26.5089 101.806 26.5367 101.972 26.5367H112.715V24.1648H103.143V13.4576Z" fill="currentColor"></path><path d="M126.841 13.8029C126.731 13.6915 126.604 13.608 126.46 13.5467C126.316 13.4855 126.162 13.4576 125.996 13.4576H120.69C119.756 13.4576 118.889 13.6191 118.098 13.9421C117.308 14.265 116.623 14.716 116.042 15.2951C115.462 15.8741 115.009 16.5645 114.683 17.3663C114.357 18.1681 114.196 19.0478 114.196 20.0055V26.5478H116.551V23.3296H124.83V26.5423H127.184V14.6547C127.184 14.4933 127.156 14.3374 127.096 14.187C127.035 14.0423 126.952 13.9142 126.841 13.8029ZM124.83 20.9576H116.556V20C116.556 19.3374 116.65 18.775 116.833 18.3073C117.015 17.8396 117.253 17.4554 117.534 17.1436C117.816 16.8318 118.131 16.5924 118.468 16.4142C118.806 16.236 119.126 16.108 119.436 16.0245C119.74 15.9409 120.01 15.8853 120.243 15.863C120.475 15.8407 120.629 15.8296 120.701 15.8296H124.841V20.9576H124.83Z" fill="currentColor"></path><path d="M139.47 22.1603C139.801 22.0935 140.127 21.9877 140.448 21.8374C140.768 21.687 141.078 21.4977 141.376 21.2694C141.675 21.0356 141.935 20.7628 142.161 20.4343C142.388 20.1113 142.57 19.7327 142.703 19.3095C142.835 18.8864 142.902 18.402 142.902 17.8563V16.3418C142.902 16.0523 142.852 15.7349 142.752 15.4008C142.653 15.0668 142.487 14.755 142.261 14.4654C142.034 14.1759 141.741 13.9365 141.376 13.7472C141.012 13.5579 140.569 13.4576 140.044 13.4576H131.108C130.937 13.4576 130.782 13.4855 130.638 13.5467C130.494 13.608 130.367 13.6915 130.262 13.8029C130.157 13.9142 130.074 14.0423 130.014 14.187C129.953 14.3318 129.925 14.4877 129.925 14.6547V26.5423H132.28V22.2605H134.916L139.823 26.5423H143.465L138.547 22.2605C138.834 22.2605 139.144 22.2271 139.47 22.1603ZM132.274 19.8886V15.8296H140.044C140.094 15.8296 140.144 15.8351 140.205 15.8407C140.26 15.8463 140.315 15.8686 140.365 15.902C140.415 15.9354 140.459 15.9855 140.492 16.0579C140.525 16.1302 140.542 16.2305 140.542 16.3641V17.8619C140.542 18.1737 140.492 18.4465 140.398 18.6859C140.304 18.9253 140.166 19.1314 139.984 19.304C139.807 19.4766 139.597 19.6102 139.348 19.7104C139.105 19.8106 138.834 19.8719 138.536 19.8997H132.274V19.8886Z" fill="currentColor"></path><path d="M157 15.8296V13.4576H146.394C146.223 13.4576 146.068 13.4855 145.925 13.5467C145.781 13.608 145.654 13.6915 145.549 13.8029C145.444 13.9142 145.361 14.0423 145.3 14.187C145.239 14.3318 145.212 14.4877 145.212 14.6547V23.2126C145.212 23.8251 145.322 24.3429 145.543 24.7661C145.764 25.1893 146.041 25.5345 146.367 25.7962C146.698 26.0634 147.052 26.2527 147.439 26.3641C147.826 26.481 148.18 26.5367 148.506 26.5367H157V24.1648H148.522C148.207 24.1648 147.97 24.0812 147.809 23.9198C147.649 23.7583 147.566 23.5189 147.566 23.2071V21.1915H156.928V18.8029H147.566V15.8296H157Z" fill="currentColor"></path><defs><linearGradient id="paint0_linear" x1="11.8347" y1="14.2185" x2="21.4291" y2="22.4997" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC10B"></stop><stop offset="1" stopColor="#FB3F2E"></stop></linearGradient></defs></svg></Navbar.Brand>
                  {type===true?<Navbar.Brand ><button onClick={()=>dispatch({type:'LOGOUT',payload:null})} className="btn btn2">Log Out</button></Navbar.Brand>
                :<></>} 
                    </div>
            </Navbar>
        </div>
    </>
}
export default Nav;