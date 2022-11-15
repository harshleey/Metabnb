import React from 'react'
import mblogo from '../assets/images/sponsors-logo/mb-logo.svg'
import metamask from '../assets/images/sponsors-logo/metamask-logo.svg'
import openseas from '../assets/images/sponsors-logo/openseas-logo.svg'

const Sponsors = () => {
  return (
    <section className="sponsors">
        <img src={mblogo} alt="" className='sponsor-logo'/>
        <img src={metamask} alt="" className='sponsor-logo'/>
        <img src={openseas} alt="" className='sponsor-logo'/>
    </section>
  )
}

export default Sponsors