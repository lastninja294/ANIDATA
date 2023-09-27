import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'animeMovie',
  title: 'Anime Movie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
    }),
    defineField({
      name: 'trailerUrl',
      title: 'Trailer URL',
      type: 'url',
    }),
    defineField({
      name: 'movieUrl',
      title: 'Movie URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10),
    }),
    defineField({
      name: 'fandubs',
      title: 'Fandubs',
      type: 'reference',
      to: [{ type: 'fandub' }],
    }),
  ],
})
