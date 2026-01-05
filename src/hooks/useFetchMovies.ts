import { useState, useEffect } from 'react';
import { Movie } from '../types/MovieTypes';

// Placeholder values for the API configuration
// NOTE: In a production application, these should be handled securely via environment variables.
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'YOUR_MANDATORY_API_KEY'; // Replace with your actual TMDB API key

interface FetchResult {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch movies from a specified API endpoint.
 * @param fetchUrl The path part of the API endpoint (e.g., '/trending/all/week?language=en-US')
 * @returns An object containing movies, loading status, and error state.
 */
const useFetchMovies = (fetchUrl: string): FetchResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fetchUrl) {
      setLoading(false);
      return;
    }

    // Ensure the fetch URL starts with the base URL structure if it doesn't already
    const url = `${API_BASE_URL}${fetchUrl}${fetchUrl.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          // Attempt to read error message if available
          const errorText = await response.text();
          throw new Error(`HTTP Error ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        
        // Assuming TMDB structure where results are nested
        if (data.results && Array.isArray(data.results)) {
          setMovies(data.results as Movie[]);
        } else {
          setMovies([]);
          console.warn('Fetched data structure unexpected:', data);
        }

      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to fetch data: ${e.message}`);
        } else {
          setError('An unknown error occurred during movie fetching.');
        }
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]); // Re-run effect if the fetch URL changes

  return { movies, loading, error };
};

export default useFetchMovies;
// Note: The Movie type must be correctly defined in src/types/MovieTypes.ts for this file to compile without error.