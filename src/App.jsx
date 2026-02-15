import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import MovieRow from './components/MovieRaw';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FIX: Ensure movies.json is in your /public folder
    fetch('/movies.json') 
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="h-screen bg-black flex justify-center items-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );

  return (
    <div className='bg-[#141414] min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      
      <div className="relative z-10 mt-24 pb-20 space-y-8">
        {/* Trending: Show all/first 10 */}
        <MovieRow title="Trending Now" movies={movies} />
        
        {/* Popular: Filter by rating */}
        <MovieRow 
          title="Popular on Netflix" 
          movies={movies.filter(m => parseFloat(m.rating) > 9)} 
        />
        
        {/* Action: Filter by genre */}
        <MovieRow 
          title="Action Movies" 
          movies={movies.filter(m => m.genre === "Action")} 
        />

        {/* Sci-Fi: Filter by genre */}
        <MovieRow 
          title="Sci-Fi Hits" 
          movies={movies.filter(m => m.genre === "Sci-Fi")} 
        />
      </div>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default App;