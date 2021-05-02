import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Carousel2 = ({ images }) => {
  return (
    <section className='section' aria-labelledby='example2'>
      <header className='section-header'>
        <h2 id='example2'>Example 2: Default carousel with images</h2>
        <p>
          A default carousel example has lazy loading and preloading (the 2
          adjacent images on either side of the current image); touch swiping
          and mouse dragging on the carousel; touch swiping, mouse dragging and
          wheel scrolling on the thumbnails; touch swipe down to exit the
          maximized carousel; and keyboard navigation.{' '}
          <a
            href='https://github.com/yifaneye/react-gallery-carousel/blob/master/example/src/App.js#L152'
            target='_blank'
            rel='noopener noreferrer'
          >
            See the code
          </a>
        </p>
      </header>
      <div className='carousel-container'>
        <Carousel images={images} />
      </div>
    </section>
  );
};

export default Carousel2;
