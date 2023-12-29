import React from 'react';
import Premio from './Premio';
import useCarousel from '../hooks/useCarousel';
import '../styles/Carousel.css';

const Carousel = ({ premios }) => {
  const { visiblePremios, containerStyle } = useCarousel(premios);


  return (
    <div className="juego-container" style={containerStyle}>
      {visiblePremios.map((premio) => (
        <Premio key={premio.id} src={premio.src} alt={premio.alt} />
      ))}
    </div>
    
  );
};

export default Carousel;