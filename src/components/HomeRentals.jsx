import React from 'react'
import data from "../HomeRentalsData"
import stars from "../assets/images/home-section-nfts/star.svg"

const HomeRentals = () => {
    let newSlice = data.slice(4, 8)
    let places = newSlice.concat(data.slice(0, 4))
  return (
    <section className="home-rentals">
        <h2>Inspiration for your next adventure</h2>

        <div className="home-rentals-grid">
                {places.map((item) =>
                    <div key={item.id} className="grid-card">
                        <img src={item.img} alt="" />

                        <div className="card-details">
                            <div className="card-top-details">
                                <span className="room">{item.room}</span>
                                <span className="price">{item.price}</span>
                            </div>

                            <div className="card-bottom-details">
                                <span className="distance">{item.distance}</span>
                                <span className="availabitlity">{item.availability}</span>
                            </div>
                            
                            
                        </div>

                        <div className="ratings">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                        </div>
                    </div>
                )}
        </div>

    </section>
  )
}

export default HomeRentals
