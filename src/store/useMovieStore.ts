import { MovieResult } from "@/interfaces/movie.interface";
import { create } from "zustand";
import {
  PersistStorage,
  StorageValue,
  createJSONStorage,
  persist,
} from "zustand/middleware";
import superjson from "superjson";

export interface MovieState {
  query: string;
  count: number;
  moviesResult: MovieResult[];
  favorites: MovieResult[];
  addCount?: () => void;
  addFavorite?: (newFavorite: MovieResult) => void;
  addMovies?: (movies: MovieResult[]) => void;
  updateQuery: (searchQuery: string) => void;
}

const storage: PersistStorage<MovieState> = {
  getItem: function (
    name: string
  ):
    | StorageValue<MovieState>
    | Promise<StorageValue<MovieState> | null>
    | null {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse(str);
  },
  setItem: function (
    name: string,
    value: StorageValue<MovieState>
  ): void | Promise<void> {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: function (name: string): void | Promise<void> {
    localStorage.removeItem(name);
  },
};

const initialtate: MovieState = {
  query: "",
  moviesResult: [],
  favorites: [],
  count: 0,
  updateQuery: (searchQuery) => {},
};

export const useMovieStore = create<MovieState>()(
  persist(
    (set, get) => ({
      ...initialtate,
      addCount: () => set({ count: get().count + 1 }),
      updateQuery: (querySearch: string) => set({ query: querySearch }),
      addFavorite(newFavorite) {
        set({
          favorites: [...get().favorites, newFavorite],
        });
      },
      addMovies(movies) {
        set({
          moviesResult: [...get().moviesResult, ...movies],
        });
      },
    }),
    {
      name: "movie-storage",
      // skipHydration: true,
      // storage,
      // onRehydrateStorage(state) {
      //   console.log("hydration starts");

      //   return (state, error) => {
      //     if (error) {
      //       // TODO connect with a logging service
      //       console.log("an error happened during hydration", error);
      //     } else {
      //       console.log("hydration finished");
      //     }
      //   };
      // },
    }
  )
);
