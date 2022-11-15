import { AxiosInstance } from 'axios'
import { useState } from 'react'

export function useLoading(url: string, client: AxiosInstance) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)

  client
    .get(url)
    .then((response) => {
      setIsLoading(false)
      setData(response.data)
    })
    .catch((error) => {
      setIsLoading(false)
      setData(error.response.data)
    })

  return {
    isLoading,
    data,
  }
}
