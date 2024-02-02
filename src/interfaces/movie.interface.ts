export interface IMovieDetail {
  id: string;
  title: string;
}

interface IMovieSearchResult {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

interface MovieResult {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

enum OriginalLanguage {
  En = "en",
  Fr = "fr",
}