import {defineType, defineField} from 'sanity'
import { YouTubePreview } from '../components/YouTubePreview'

export const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    defineField({
      name: 'source',
      type: 'url',
      title: 'YouTube video URL'
    })
  ],
  preview: {
    select: {
      url: 'source'
    }
  },
  components: {
    preview: YouTubePreview
  }
})