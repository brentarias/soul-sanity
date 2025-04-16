import { defineType, defineField } from 'sanity';
import { commonDocFields, commonDocPreview } from './commonDocFields'
// import { commonPostPageFields, commonPreview } from './commonFields'; // Adjust path as needed

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    ...commonDocFields,
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    })
  ], // Spread the shared fields
  preview: commonDocPreview, // Reuse the shared preview
});