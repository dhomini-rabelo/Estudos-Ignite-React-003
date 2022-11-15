import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'

interface hookResponse<DataType> {
  isLoading: boolean
  data: DataType | null
  wasSuccess: boolean | null
}

export function useExternalGetData<DataType>(
  url: string,
  client: AxiosInstance,
) {
  const [feedback, setFeedback] = useState<hookResponse<DataType>>({
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
