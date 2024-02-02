import * as z from "zod";

export const IMovieSearchResultSchema = z.object({
  adult: z.union([z.boolean(), z.null()]).optional(),
  backdrop_path: z.union([z.null(), z.string()]).optional(),
  genre_ids: z.union([z.array(z.number()), z.null()]).optional(),
  id: z.union([z.number(), z.null()]).optional(),
  original_language: z.union([z.null(), z.string()]).optional(),
  original_title: z.union([z.null(), z.string()]).optional(),
  overview: z.union([z.null(), z.string()]).optional(),
  popularity: z.union([z.number(), z.null()]).optional(),
  poster_path: z.union([z.null(), z.string()]).optional(),
  release_date: z.union([z.null(), z.string()]).optional(),
  title: z.union([z.null(), z.string()]).optional(),
  video: z.union([z.boolean(), z.null()]).optional(),
  vote_average: z.union([z.number(), z.null()]).optional(),
  vote_count: z.union([z.number(), z.null()]).optional(),
});
export type IMovieSearchResult = z.infer<typeof IMovieSearchResultSchema>;
