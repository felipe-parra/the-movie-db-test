import * as React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MovieResult } from "@/interfaces/movie.interface"
import MovieItem from "./MovieItem"



export function MovieList({
  movies,
  isLoading,
  isError
}: {
  movies?: MovieResult[],
  isLoading: boolean,
  isError: boolean
}) {
  if (isError) {
    return <p>{"Something wen't wrong"}</p>
  }
  return (
    <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {movies?.length && movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
