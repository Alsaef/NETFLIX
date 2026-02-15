import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  if (!movies || movies.length === 0) return null;

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="px-6 md:px-12 mb-12 group relative"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h3 className="text-lg md:text-2xl font-semibold mb-4 text-white/90">
        {title}
      </h3>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 z-40 h-full w-12 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:bg-black/70 ${showArrows ? 'md:opacity-100' : ''}`}
        >
          <FaChevronLeft className="text-white text-2xl" />
        </button>

        {/* Poster Row */}
        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar py-4 scroll-smooth"
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="flex-none w-[150px] md:w-[230px] group/card transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer relative z-0 hover:z-50"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-md shadow-2xl border border-white/10 group-hover/card:border-white/30 transition-colors">
                <img 
                  src={movie.poster} 
                  className="object-cover aspect-[2/3] w-full transition-transform duration-300 group-hover/card:scale-110"
                  alt={movie.title}
                />
              </div>
              
              {/* Title and Info BELOW the poster */}
              <div className="mt-3 space-y-1">
                <h4 className="text-sm md:text-md font-bold text-white truncate group-hover/card:text-primary transition-colors">
                  {movie.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-green-500 font-bold">{movie.rating} ★</span>
                  <span>{movie.year}</span>
                  <span className="border border-gray-600 px-1 rounded text-[10px]">{movie.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 z-40 h-full w-12 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:bg-black/70 ${showArrows ? 'md:opacity-100' : ''}`}
        >
          <FaChevronRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;