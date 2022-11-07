import * as z from 'zod'

export const searchTransactionsForm = z.object({
  query: z.string(),
})

export type searchTransactionsFormType = z.infer<typeof searchTransactionsForm>
