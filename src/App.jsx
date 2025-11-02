import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Itinerary from './components/Itinerary';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Hero />
      <Destinations />
      <Itinerary />
      <Footer />
    </div>
  );
}

export default App;
