import Image from 'next/image'
import { MovieResult } from '@/interfaces/movie.interface'

const backImageUrl = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const prefixImageLinkg = "https://image.tmdb.org/t/p/w500"

export default function MovieItem({ movie }: { movie: MovieResult }) {
  return (
    <figure key={movie.id} className="shrink-0">
      <div className="overflow-hidden rounded-md">
        {
          movie.backdrop_path &&
          <Image
            src={`${prefixImageLinkg}${movie?.poster_path}`}
            alt={`${movie.title}`}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
            blurDataURL={backImageUrl}
            placeholder='blur'
          />
        }
      </div>
      <figcaption className="pt-2 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">
          {movie.title}
        </span>
      </figcaption>
    </figure>
  )
}
