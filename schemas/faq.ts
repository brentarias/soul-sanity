import { defineType, defineField } from 'sanity';
import { siteField } from './site';

export default defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Frequently Asked Questions',
    }),
    siteField,
    defineField({
      name: 'entries',
      type: 'array',
      title: 'FAQ Entries',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'answer',
              type: 'array', // Wrap block in an array
              title: 'Answer',
              of: [{ type: 'block' }], // Define block as the only allowed type
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
  ],
});