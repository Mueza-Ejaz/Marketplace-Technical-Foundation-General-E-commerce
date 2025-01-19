// customer.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'shippingAddress1',
      title: 'Shipping Address 1',
      type: 'string',
    }),
    defineField({
      name: 'shippingAddress2',
      title: 'Shipping Address 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
})
