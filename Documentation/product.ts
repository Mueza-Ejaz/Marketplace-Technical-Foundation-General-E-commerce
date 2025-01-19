// product.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Men', 'Women', 'Kids', 'Sports'],
      },
    }),
    defineField({
      name: 'size',
      title: 'Size Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Color Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
})
