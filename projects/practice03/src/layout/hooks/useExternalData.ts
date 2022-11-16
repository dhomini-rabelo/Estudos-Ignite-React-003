import { AxiosInstance } from 'axios'
import { useEffect, useRef, useState } from 'react'

interface hookResponse<DataType> {
  isLoading: boolean
  data: DataType | null
  wasSuccess: boolean | null
}

export function useExternalData<DataType>(url: string, client: AxiosInstance) {
  const onRequestingRef = useRef(false)
  const [feedback, setFeedback] = useState<hookResponse<DataType>>({
    isLoading: true,
    data: null,
    wasSuccess: null,
  })

  useEffect(() => {
    if (!onRequestingRef.current) {
      onRequestingRef.current = true
      client
        .get(url)
        .then((response) => {
          setFeedback({
            isLoading: false,
            data: response.data,
            wasSuccess: true,
          })
          onRequestingRef.current = false
        })
        .catch((error) => {
          setFeedback({
            isLoading: false,
            data: error.response.data,
            wasSuccess: false,
          })
          onRequestingRef.current = false
        })
    }
  }, [client, url, onRequestingRef])

  return feedback
}
