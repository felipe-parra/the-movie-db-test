import React from 'react'
import { ModeToggle } from './mode-toggle'

export default function Nav() {
  return (
    <section className='flex items-center justify-between p-2'>
      <article>
        <h1>
          TMDB
        </h1>
      </article>
      <ModeToggle />
    </section>
  )
}
