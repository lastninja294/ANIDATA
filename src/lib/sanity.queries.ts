import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

// POSTS -------------------------------------------------------------------

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
// MOVIES -------------------------------------------------------------------

export const moviesQuery = groq`*[_type == "animeMovie" && defined(slug.current)] | order(_createdAt desc)`

export async function getMovies(client: SanityClient): Promise<Movie[]> {
  return await client.fetch(moviesQuery)
}

export const movieBySlugQuery = groq`*[_type == "animeMovie" && slug.current == $slug][0]`

export async function getMovie(
  client: SanityClient,
  slug: string,
): Promise<Movie> {
  return await client.fetch(movieBySlugQuery, {
    slug,
  })
}

export const movieSlugsQuery = groq`
*[_type == "animeMovie" && defined(slug.current)][].slug.current
`


export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Fandub {
  _type: 'fandub'
  _id: string
  _createdAt: string
  fandubTitle: string
  fandubSlogan: string
  slug: Slug
  link: string
  mainImage?: ImageAsset
}

export interface Movie {
  _type: 'animeMovie'
  _id: string
  _createdAt: string
  title: string
  releaseDate?: string
  slug: Slug
  genre?: string
  description?: string
  poster?: ImageAsset
  trailerUrl?: string
  movieUrl: string
  duration?: number
  rating: number
  fandub: Fandub
}
