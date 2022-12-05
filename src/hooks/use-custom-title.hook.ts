import { useEffect } from 'react'

export const useCustomTitle = (title: string): void => {
  useEffect(() => {
    document.title = title
  }, [title])
}
