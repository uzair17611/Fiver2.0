import React from 'react';
import './Slid.scss';
import Slider from 'infinite-react-carousel';


const Slid = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slide'>
      <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
      
    </div>
  );
};

export default Slid;