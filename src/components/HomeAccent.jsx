import React from 'react'
import image1 from "../assets/images/footer-nfts/footer-nft-1.png"
import image2 from "../assets/images/footer-nfts/footer-nft-2.png"
import image3 from "../assets/images/footer-nfts/footer-nft-3.png"

const HomeAccent = () => {
  return (
    <section className="accent-section">
        <div className="accent-content">
            <h3>Metabnb NFTs</h3>

            <p>Discover our NFT gift cards collection. Loyal custiomers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>

            <button className="btn learn-more">Learn more</button>
        </div>

        <div className="accent-images">
          <img src={image1} alt="" className='metabnb-nft-1'/>
          <img src={image2} alt="" className='metabnb-nft-2'/>
          <img src={image3} alt="" className='metabnb-nft-3'/>
        </div>

    </section>
  )
}

export default HomeAccent
