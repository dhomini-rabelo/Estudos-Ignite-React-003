import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'

interface hookResponse {
  isLoading: boolean
  data: any
  wasSuccess: boolean | null
}

export function useLoading(url: string, client: AxiosInstance) {
  const [feedback, setFeedback] = useState<hookResponse>({
    isLoading: true,
    data: null,
    wasSuccess: null,
  })

  useEffect(() => {
    client
      .get(url)
      .then((response) => {
        setFeedback({
          isLoading: false,
          data: response.data,
          wasSuccess: true,
        })
      })
      .catch((error) => {
        setFeedback({
          isLoading: false,
          data: error.response.data,
          wasSuccess: false,
        })
      })
  }, [client, url])

  return feedback
}
