import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Soul Sovereignty',

  projectId: 'w5d9vy16',
  dataset: 'blog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
