import { Link } from 'react-router-dom'
import logo from "../assets/images/header-nft/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

const Nav = () => {
    const [toggleBars, setToggleBars] = useState(false)
    // const [toggleTimes, setToggleTimes] = useState(fals)
    return (
        <nav className="navbar">
            <img src={logo} className="logo"/>

            <FaBars onClick={() => {
                setToggleBars(!toggleBars)
            }} className='bars'/>

            {  (<div className={`header-links ${toggleBars === true ? 'active' : ""}`}>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/place">Place to stay</Link></li>
                    <li><Link to="/nfts">NFTs</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
                <button className="btn btn-wallet">
                    Connect wallet
                </button>

                <FaTimes onClick={() => {
                setToggleBars(!toggleBars)
            }}  className='times'/>
            </div>)}
            
            
        </nav>
    )

}

export default Nav