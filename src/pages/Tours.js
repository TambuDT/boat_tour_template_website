import React, { useState, useEffect } from 'react';

function Tours() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1299);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1299);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderTourSection = (isAlternate, imageSrc, title, price, details, highlights, maxPassengers, duration) => (
    <section className={`tour-container ${isAlternate ? 'alternate' : ''}`}>
      <div className='tour-image-container'>
        <img className="tour-image" src={imageSrc} alt={`${title} image`}></img>
      </div>
      <div className='tour-text-container'>
        <div className='spacer20'></div>
        <h1 className='teachers tour-title'>{title}</h1>
        <h3 className='teachers'>{price}</h3>
        <p className='teachers tour-details'>{details}</p>
        <ul className='teachers places-list'>
          {highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
        </ul>
        <p><i className="fa-solid fa-users"></i> Max. {maxPassengers} Passengers</p>
        <p><i className="fa-regular fa-clock"></i> {duration}</p>
        <div className='book-now-button'>Details</div>
        <div className='spacer20'></div>
      </div>
    </section>
  );

  return (
    <div id='tour' className='container'>
      <div className='top-page-spacer'></div>
      <h1 className='page-title teachers'>Most requested tours</h1>
      <h3 className='page-sub-title teachers'>A private boat tour is probably the best activity that you can do on Lake Como.</h3>
      <h4 className='page-sub-text teachers'>Jump straight to the type of boat tours you are looking for:</h4>

      {renderTourSection(false, '../assets/1hourtour.webp', '1 Hour Tour', '250€', 
        'Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset\'s glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:', 
        ['Villa Geno', 'Villa d\'Este', 'Villa Pliniana', 'Villa Oleandra - George Clooney\'s House', 'Mandarin Hotel'], 6, '1 Hour')}

      {renderTourSection(true, '../assets/2hourtour.webp', '2 Hours Tour', '450€', 
        'Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset\'s glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:', 
        ['Villa Geno', 'Villa d\'Este', 'Villa Pliniana', 'Villa Oleandra - George Clooney\'s House', 'Mandarin Hotel'], 6, '2 Hours')}

      {renderTourSection(false, '../assets/3hourtour.webp', '3 Hours Tour', '250€', 
        'Immerse yourself in the breathtaking beauty of the lake with our express tour. Whether you crave an unforgettable evening basking in the sunset\'s glow or a leisurely cruise past the enchanting villas dotting the shoreline, this tour is tailor-made for you. Here are the highlights of what awaits you:', 
        ['Villa Geno', 'Villa d\'Este', 'Villa Pliniana', 'Villa Oleandra - George Clooney\'s House', 'Mandarin Hotel'], 6, '3 Hours')}

      <h1 className='page-title teachers'>Other tours</h1>

      <div className="carousel">
        <div className="carousel-inner">
          {Array(6).fill(0).map((_, index) => (
            <div className="card" key={index}>
              <img className="tour-card-image" src='../assets/3hourtour.webp' alt='Tour'></img>
              <h2 className='teachers tour-title'>3 Hours Tour</h2>
              <h3 className='teachers'>250€</h3>
              <div className='card-details-button'>Details</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
