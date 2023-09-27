import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fandub',
  title: 'Fandub',
  type: 'document',
  fields: [
    defineField({
      name: 'fandubTitle',
      title: 'Fandub Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fandubSlogan',
      title: 'Fandub slogan',
      type: 'text',
      rows: 5,
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Fandub Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
