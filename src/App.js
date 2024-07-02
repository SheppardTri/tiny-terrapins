import React from 'react';
import Hero from './components/Hero';
import MainContent from './components/MainContent';

import customBackgroundImage from './assets/images/swamp-bg.webp';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <Hero
        backgroundImage={customBackgroundImage}
        title="Welcome to Tiny Terrapins"
        subtitle="Explore new web development techniques and creative designs."
        ctaText='Heeey I am a button'
        ctaLink='#'
        />
      </header>
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>
      <MainContent>
        {`
## Main Content Area

This is where the main content of your website will go. It is designed to be sleek, modern, and highly accessible, ensuring a great user experience across all devices.

You can include various elements here, such as text, images, videos, and other multimedia content, to engage your users. The layout is responsive and adjusts to different screen sizes, providing a consistent and visually appealing presentation.

- Item 1
- Item 2
- Item 3

**Bold text** and *italic text* are also supported.
        `}
      </MainContent>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>2024 Tiny Terrapins</p>
      </footer>
    </div>
  );
}

export default App;
