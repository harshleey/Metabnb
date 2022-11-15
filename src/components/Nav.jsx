import { Link } from 'react-router-dom'
import logo from "../assets/images/header-nft/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'
import metamask from "../assets/images/connect-walllet/meta-mask.svg"
import walletConnect from "../assets/images/connect-walllet/wallet-connect.svg"
import arrow from "../assets/images/connect-walllet/down-arrow.svg"

const Nav = () => {
    const [toggleBars, setToggleBars] = useState(false)
    const [toggleConnect, setToggleConnect] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} className="logo"/>

            <FaBars onClick={() => {
                setToggleBars(!toggleBars)
            }} className='bars'/>

            <div className={`header-links ${toggleBars === true ? 'active' : ""}`}>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/place">Place to stay</Link></li>
                    <li><Link to="/nfts">NFTs</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
                <button onClick={() => {
                setToggleConnect(!toggleConnect)
                // console.log(toggleConnect)
            }} className="btn btn-wallet">
                    Connect wallet
                </button>

                <FaTimes onClick={() => {
                setToggleBars(!toggleBars)
            }}  className='times'/>
            </div>


            <div className={`connect-wallet ${toggleConnect === true ? 'active-connect' : ""}`}>
                <div className="inner-wallet">
                    <div className="connect">
                    <p>Connect Wallet</p>
                    <FaTimes onClick={() => {
                        setToggleConnect(!toggleConnect)
                    }}  className='connect-times'/>
                    </div>
                    

                    <div className="wallet-dropdown">
                        <small>Choose your preferred wallet:</small>

                        <button className="metamask dropdown">
                            <img src={metamask} alt="" className='dropdown-logo'/>
                            <img src={arrow} alt="" />
                        </button>

                        <button className="metamask dropdown">
                            <img src={walletConnect} alt="" className='dropdown-logo'/>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    
                </div>
            </div>
            
            
        </nav>
    )

}

export default Nav