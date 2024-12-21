import { ProjectsIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const TypeProject = defineType({
  name: 'projects',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .error(
            'The title is required and should be between 5 and 100 characters.'
          ),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectIndex',
      title: 'Project Index',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      options: {
        dateFormat: 'MM-yyyy',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['perso', 'pro', 'autre'],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
