import React from 'react';
import { Carousel } from 'react-bootstrap';

import './styles.scss';

const NewsCarousel = () => {
  return (
    <div id='carousel-wrapper'>
      <div id='carousel-header'>News</div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-img'
            src='https://www.placecage.com/800/200'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-img'
            src='https://www.placecage.com/800/200'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-img'
            src='https://www.placecage.com/800/200'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
