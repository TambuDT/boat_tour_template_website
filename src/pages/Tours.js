import React from 'react'

function Tours() {
  return (
    <div id='tour' className='container'>
      <div className='top-page-spacer'></div>
      <h1 className='page-title teachers'>Most requested tours</h1>
      <h3 className='page-sub-title teachers'>A private boat tour is probably the best activity that you can do on Lake Como.</h3>
      <h4 className='page-sub-text teachers'>Jump straight to the type of boat tours you are looking for:</h4>

      <section className='tour-container'>

        <div className='tour-image-container'>
          <img className="tour-image" src='../assets/1hourtour.webp'></img>
        </div>

        <div className='tour-text-container'>
          <div className='spacer20'></div>
          <h1 className='teachers tour-title'>1 Hour Tour</h1>
          <h3 className='teachers'>250€</h3>
          <p className='teachers tour-details'>Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset's glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:</p>
          <ul className='teachers places-list'>
            <li>Villa Geno</li>
            <li>Villa d'Este</li>
            <li>Villa Pliniana</li>
            <li>Villa Oleandra - George Clooney's House</li>
            <li>Mandarin Hotel</li>
          </ul>
          <p><i className="fa-solid fa-users"></i> Max. 6 Passengers</p>
          <p><i className="fa-regular fa-clock"></i> 1 Hour</p>
          <div className='book-now-button'>Details</div>
          <div className='spacer20'></div>
        </div>

      </section>


      <section className='tour-container'>

        <div className='tour-text-container'>
          <div className='spacer20'></div>
          <h1 className='teachers tour-title'>2 Hours Tour</h1>
          <h3 className='teachers'>450€</h3>
          <p className='teachers tour-details'>Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset's glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:</p>
          <ul className='teachers places-list'>
            <li>Villa Geno</li>
            <li>Villa d'Este</li>
            <li>Villa Pliniana</li>
            <li>Villa Oleandra - George Clooney's House</li>
            <li>Mandarin Hotel</li>
          </ul>
          <p><i className="fa-solid fa-users"></i> Max. 6 Passengers</p>
          <p><i className="fa-regular fa-clock"></i> 2 Hours</p>
          <div className='book-now-button'>Details</div>
          <div className='spacer20'></div>
        </div>


        <div className='tour-image-container'>
          <img className="tour-image" src='../assets/2hourtour.webp'></img>
        </div>
      </section>


      <section className='tour-container'>

        <div className='tour-image-container'>
          <img className="tour-image" src='../assets/3hourtour.webp'></img>
        </div>

        <div className='tour-text-container'>
          <div className='spacer20'></div>
          <h1 className='teachers tour-title'>3 Hours Tour</h1>
          <h3 className='teachers'>250€</h3>
          <p className='teachers tour-details'>Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset's glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:</p>
          <ul className='teachers places-list'>
            <li>Villa Geno</li>
            <li>Villa d'Este</li>
            <li>Villa Pliniana</li>
            <li>Villa Oleandra - George Clooney's House</li>
            <li>Mandarin Hotel</li>
          </ul>
          <p><i className="fa-solid fa-users"></i> Max. 6 Passengers</p>
          <p><i className="fa-regular fa-clock"></i> 3 Hours</p>
          <div className='book-now-button'>Details</div>
          <div className='spacer20'></div>
        </div>

      </section>

      <h1 className='page-title teachers'>Other tours</h1>

      <div className="carousel">
        <div className="carousel-inner">

          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>


          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>


          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>


          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>


          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>


          <div className="card">
            <img className="tour-card-image" src='../assets/3hourtour.webp'></img>
            <h2 className='teachers tour-title'>3 Hours Tour</h2>
            <h3 className='teachers'>250€</h3>
            <div className='card-details-button'>Details</div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Tours