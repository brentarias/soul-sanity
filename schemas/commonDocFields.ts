import { defineField } from 'sanity';

// Shared fields for both post and page
export const commonDocFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
  }),
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
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
    name: 'body',
    title: 'Body',
    type: 'blockContent',
  }),
];

// Shared preview configuration
export const commonDocPreview = {
  select: {
    title: 'title',
    author: 'author.name',
    media: 'mainImage',
  },
  prepare(selection) {
    const { author } = selection;
    return { ...selection, subtitle: author && `by ${author}` };
  },
};