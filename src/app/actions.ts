"use server";
import { config } from "@/config";

const url = "https://api.themoviedb.org/3/search/movie";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${config.tmdbAccessToken}`,
  },
};

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

export const searchMovie = async (query: string) => {
  try {
    const response = await fetch(`${url}?query=${query}`, options);
    if (!response.ok) {
      throw Error("Something wen't wrong");
    }
    const data = (await response.json()) as IMovieSearchResult;
    console.log({ data });

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
