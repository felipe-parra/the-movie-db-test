"use server";
import { config } from "@/config";
import { IMovieSearchResult } from "@/schemas/movie.schema";

const url = "https://api.themoviedb.org/3/search/movie";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${config.tmdbAccessToken}`,
  },
};

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
