import React from 'react'
import footerLogo from "../assets/images/footer-nfts/footer-logo.svg"
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="socials">
                <img src={footerLogo} alt="" className='footer-logo'/>
                
                <div className="social-logo">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
                
            </div>

        {/* <div className="footer-list"> */}
            
                
                <ul>
                    <p>Community</p>
                    <li><a href="">NFT</a></li>
                    <li><a href="">Tokens</a></li>
                    <li><a href="">Landlords</a></li>
                    <li><a href="">Discord</a></li>
                    
                </ul>
           
            
            
                
                <ul>
                    <p>Places</p>
                    <li><a href="">Castle</a></li>
                    <li><a href="">Farms</a></li>
                    <li><a href="">Beach</a></li>
                    <li><a href="">Learn more</a></li>
                </ul>
          

            
                
                <ul>
                    <p>About us</p>
                    <li><a href="">Road map</a></li>
                    <li><a href="">Creators</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            
        </div>
        
        <span className='copyright'>&#169; 2022 Metabnb</span>
        {/* </div> */}
    </footer>
  )
}

export default Footer
