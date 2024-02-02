'use client'
import { useQuery } from '@tanstack/react-query'
import { searchMovie } from './actions'
import { MovieList } from '@/components/movies/MovieList'
import SearchInput from '@/components/search-input'
import useStore from '@/store/useStore'
import { useMovieStore } from '@/store/useMovieStore'
import { useEffect } from 'react'

export default function HomePage() {
  const query = useStore(useMovieStore, (state) => state.query)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-movies", query],
    queryFn: () => searchMovie(query || ""),
    staleTime: 5 * 1000,

  })

  return (
    <section>
      <article>
        <SearchInput />
      </article>
      <article className='w-full'>
        <MovieList movies={data?.results.slice(0, 3)} isError={isError} isLoading={isLoading} />
      </article>
    </section>
  )
}
