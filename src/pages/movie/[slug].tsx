import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import {
  getMovie,
  type Movie,
  movieBySlugQuery,
  movieSlugsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { formatDate } from '~/utils'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    movie: Movie
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const movie = await getMovie(client, params.slug)

  if (!movie) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      movie,
    },
  }
}

export default function Movie(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [movie] = useLiveQuery(props.movie, movieBySlugQuery, {
    slug: props.movie.slug.current,
  })

  console.log(movie)

  return (
    <Container>
      <h1>{movie.title}</h1>
      {movie.poster ? (
        <Image
          src={urlForImage(movie.poster).url()}
          height={231}
          width={367}
          alt=""
        />
      ) : (
        <div className="post__cover--none" />
      )}
      <p>{movie.description}</p>

      <br />
      <a href={movie.movieUrl} target="_blank">
        Animega link
      </a>
      <p>Anime davomiyligi : {movie.duration}</p>
      <p>Janri: {movie.genre}</p>
      {movie.trailerUrl && (
        <a href={movie.trailerUrl} target="_blank">
          Anime Trailer
        </a>
      )}
    </Container>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(movieSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/movie/${slug}`) || [],
    fallback: 'blocking',
  }
}
