import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pic',
  title: 'Image',
  type: 'document',
  fields: [
    defineField({
        name: 'pic',
        title: 'Image',
        type: 'image',
        // options: {
        //   hotspot: true,
        // },
      }),
    defineField({
        name: 'id',
        title: 'ID',
        type: 'slug',
    }),            
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),          
    defineField({
        name: 'group',
        title: 'Group',
        type: 'string',
    }),          
  ],
})
