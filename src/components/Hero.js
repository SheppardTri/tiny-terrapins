import React from 'react';
import PropTypes from 'prop-types';
import defaultBackgroundImage from '../assets/images/tiny-terrapin-logo.webp'; // Import the default background image

function Hero({
  backgroundImage = defaultBackgroundImage,
  title,
  subtitle,
  ctaText = '',
  ctaLink = ''
}) {
  return (
    <div
      className="relative bg-contain bg-no-repeat bg-center h-[25rem] md:h-[30rem] lg:h-[35rem] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the background image prop, defaulting to the imported image
      role="banner"
      aria-label="Hero section with background image and main call to action"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 p-4 text-white animate-fade-in">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-in-down hero-header"
          aria-level="1"
        >
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 mb-8 body-font">{subtitle}</p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label={`Call to action: ${ctaText}`}
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

export default Hero;
