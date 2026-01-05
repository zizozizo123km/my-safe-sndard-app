export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type MovieCategory = 'trending' | 'top_rated' | 'now_playing' | 'upcoming';

export interface RowData {
  title: string;
  fetchUrl: string;
}

// Optionally, if we fetch details separately
export interface MovieDetail extends Movie {
  genres: Genre[];
  runtime: number | null;
  tagline: string | null;
}