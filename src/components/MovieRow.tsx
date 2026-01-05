import React from 'react';
import { Movie } from '../types/MovieTypes';

// --- MovieCard Sub-component (Mocked for immediate rendering within the file) ---
interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    // Basic Netflix card styling: fixed size, scale on hover
    return (
        <div 
            key={movie.id}
            // Dimensions typical of a Netflix row item (aspect ratio close to 16:9 or 4:3 for posters)
            className="relative w-36 h-24 sm:w-48 sm:h-32 md:w-60 md:h-40 flex-shrink-0 rounded-md overflow-hidden cursor-pointer 
                       transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 
                       shadow-xl hover:shadow-2xl bg-gray-800"
        >
            <img 
                src={movie.posterUrl} 
                alt={movie.title}
                className="w-full h-full object-cover"
                loading="lazy"
            />
            {/* Optional Title Overlay */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-xs truncate">{movie.title}</p>
            </div> */}
        </div>
    );
};
// ----------------------------------------


interface MovieRowProps {
    title: string;
    movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
    if (!movies || movies.length === 0) {
        return null;
    }

    return (
        <section className="space-y-2 mb-10 mt-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white ml-6 md:ml-12 cursor-pointer transition duration-200">
                {title}
            </h2>
            
            {/* Scrolling container. Note: relies on global CSS for scrollbar hiding (if 'scrollbar-hide' utility isn't available) */}
            <div className="relative">
                <div className="flex items-center space-x-2 md:space-x-3 overflow-x-scroll py-2 px-6 md:px-12 scrollbar-hide">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieRow;