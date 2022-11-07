import * as z from 'zod'

export const newTransactionSchema = z.object({
  title: z.string(),
  type: z.enum(['income', 'outcome']),
  price: z.number(),
  category: z.string(),
})

export type newTransactionSchemaType = z.infer<typeof newTransactionSchema>
