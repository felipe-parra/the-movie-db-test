'use client'
import React, { useEffect, useState } from 'react'
import useStore from '@/store/useStore'
import { useMovieStore } from '@/store/useMovieStore'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { searchMovie } from './actions'

export default function HomePage() {
  const addCount = useMovieStore((state) => state.addCount)
  const count = useStore(useMovieStore, (state) => state.count)
  const [movies, setMovies] = useState([])
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-movies"],
    queryFn: () => searchMovie("spiderman"),
    staleTime: 5 * 1000
  })

  if (isLoading) return <p>Loading...</p>
  return (
    <section>
      <article>
        <h1>
          Home
        </h1>
      </article>
      <button className='text-white text-2xl' onClick={addCount}>
        {count}
      </button>
      <article>
        {
          data?.results.map((movie) => <p key={movie.id}>{movie?.title}</p>)
        }
      </article>
    </section>
  )
}
