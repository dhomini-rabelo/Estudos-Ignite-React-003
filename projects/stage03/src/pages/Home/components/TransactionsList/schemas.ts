import * as z from 'zod'

export const searchTransactionsSchema = z.object({
  query: z.string(),
})

export type searchTransactionsSchemaType = z.infer<
  typeof searchTransactionsSchema
>
