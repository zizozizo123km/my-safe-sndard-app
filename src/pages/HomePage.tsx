import React from 'react';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';
import useFetchMovies from '../hooks/useFetchMovies';
// Note: We rely on the Movie type definition being consistent across useFetchMovies and MovieRow.

// Placeholder list of category identifiers/endpoints
const API_CATEGORIES = {
  TRENDING: 'trending',
  TOP_RATED: 'top_rated',
  ACTION: 'action',
  COMEDY: 'comedy',
  HORROR: 'horror',
};

// Helper function to simulate external image URLs (e.g., TMDb)
const getImageUrl = (path: string | undefined | null, size: 'original' | 'w500' = 'original') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : '';


const HomePage: React.FC = () => {
  // Fetching Data for different sections
  const { data: trending, loading: loadingTrending, error: errorTrending } = useFetchMovies(API_CATEGORIES.TRENDING);
  const { data: topRated } = useFetchMovies(API_CATEGORIES.TOP_RATED);
  const { data: action } = useFetchMovies(API_CATEGORIES.ACTION);
  const { data: comedy } = useFetchMovies(API_CATEGORIES.COMEDY);
  const { data: horror } = useFetchMovies(API_CATEGORIES.HORROR);

  const heroMovie = trending?.[0];
  
  // Basic Loading Screen (focused on the crucial trending data)
  if (loadingTrending) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <p className="text-2xl animate-pulse">Loading Netflix Content...</p>
      </div>
    );
  }

  // Basic Error Screen
  if (errorTrending) {
    return (
      <div className="min-h-screen bg-black text-red-500 p-10 pt-20">
        <h1 className="text-3xl font-bold">Error</h1>
        <p>Could not load trending content. Check API configuration or network connection.</p>
        <p className="text-sm mt-4">{errorTrending.message}</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen">
      {/* Fixed Header */}
      <Header />

      <main>
        {/* 1. Hero Banner */}
        {heroMovie && (
          <div 
            className="relative h-[85vh] text-white overflow-hidden"
            style={{ 
              backgroundImage: `url(${getImageUrl(heroMovie.backdrop_path, 'original')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                {/* Assuming movie object has 'title' or 'name' */}
                {heroMovie.title || heroMovie.name || 'Featured Title'}
              </h1>
              <p className="hidden md:block text-lg mb-6 line-clamp-3 drop-shadow-md">
                {heroMovie.overview}
              </p>
              
              <div className="flex space-x-3 mt-4">
                <button className="flex items-center bg-white text-black py-3 px-6 rounded-md text-xl font-bold hover:bg-gray-300 transition">
                  {/* Use a simple character or icon library for production */}
                  ▶ Play
                </button>
                <button className="flex items-center bg-gray-600 bg-opacity-70 text-white py-3 px-6 rounded-md text-xl font-bold hover:bg-opacity-90 transition">
                  ⓘ More Info
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Movie Rows Container */}
        <section className="relative space-y-8 md:space-y-12 pb-24 -mt-16 md:-mt-24 z-30">
          
          {/* Trending Row (Often styled differently/larger) */}
          {trending && trending.length > 0 && (
            <MovieRow title="Trending Now" movies={trending} isLargeRow={true} />
          )}

          {topRated && topRated.length > 0 && (
            <MovieRow title="Top Rated Movies" movies={topRated} />
          )}

          {action && action.length > 0 && (
            <MovieRow title="Action Thrillers" movies={action} />
          )}
          
          {horror && horror.length > 0 && (
            <MovieRow title="Chilling Horror" movies={horror} />
          )}

          {comedy && comedy.length > 0 && (
            <MovieRow title="Laugh Out Loud Comedies" movies={comedy} />
          )}
          
        </section>
      </main>
    </div>
  );
};

export default HomePage;