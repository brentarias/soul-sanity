import { defineType } from 'sanity';
import { commonDocFields, commonDocPreview } from './commonDocFields';
import { siteField } from './site';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    siteField, // Add the site field specific to pages
    ...commonDocFields // Spread the shared fields
  ],
  preview: commonDocPreview, // Reuse the shared preview
});