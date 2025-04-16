import { defineField } from 'sanity';

export const siteField = defineField({
  name: 'site',
  type: 'string',
  title: 'Site',
  options: {
    list: ['green-wizard', 'soul-sovereignty'],
    layout: 'dropdown',
  },
  validation: Rule => Rule.required(), // Optional
});