// order.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule) => Rule.min(1),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
      },
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['Pending', 'Completed', 'Failed'],
      },
    }),
    defineField({
      name: 'shippingStatus',
      title: 'Shipping Status',
      type: 'string',
      options: {
        list: ['Not Shipped', 'Shipped', 'Delivered'],
      },
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
})
