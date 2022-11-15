import React from 'react'
import image1 from "../assets/images/header-nft/head-nft-1.png"
import image2 from "../assets/images/header-nft/head-nft-2.png"
import image3 from "../assets/images/header-nft/head-nft-3.png"
import image4 from "../assets/images/header-nft/head-nft-4.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>Rent a <span className="accent">Place</span> away from <span className="accent">Home</span> in the <span className="accent">Metaverse</span></h1>

                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                <div className="search-space">
                    <input type="search" name="" id="" placeholder='Search for location'/>
                    <button className="btn search-submit">Search</button>
                </div>
                
            </div>

            <div className="header-nfts">
                <div className="head-nft left-nft">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
               
               <div className="head-nft right-nft">
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
               </div> 
            </div>
        </div>
    )
}

export default Header