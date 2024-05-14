import React from 'react'

function AboutUs() {
  return (
    <div id='about' className='container'>
      <div className='top-page-spacer'></div>
      <section className='tour-container'>
        <div className='tour-image-container'>
          <img className="about-image" src='../assets/us.webp'></img>
        </div>

        <div className='tour-text-container'>
          <div className='spacer20'></div>
          <h1 className='teachers tour-title'>About Us</h1>
          <p className='teachers tour-details'>Let's introduce ourselves! We're Alessia and Marco, siblings united by our love for boats and the mesmerizing beauty of Lake Como. Come aboard with us as we unveil the secrets and treasures of this magnificent lake. And guiding us on our journey is none other than our cherished Riva Rivamare, an epitome of Italian elegance and craftsmanship, promising unforgettable moments on the water!</p>
          <ul className='teachers places-list'>
            <li>E-MAIL: mail@mail.com</li>
            <li>TEL: +39 456 456 4556</li>
            <li><i className="fa-brands fa-instagram"></i> @como_lake_view</li>
            <li><i className="fa-brands fa-whatsapp"></i> +39 456 456 4556</li>
            <li>P.IVA: 000000000</li>
          </ul>
          <div className='spacer20'></div>
        </div>
      </section>
      <div className='top-page-spacer'></div>
    </div>
  )
}

export default AboutUs