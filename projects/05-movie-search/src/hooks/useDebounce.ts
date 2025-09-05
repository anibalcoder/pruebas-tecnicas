import { useEffect } from "react"

interface Props {
  search: string
  delay?: number
  isSearchError: boolean
  sendMovie: (isSearchError: boolean) => void
}

export function useDebounce ({
  search,
  isSearchError,
  delay = 300,
  sendMovie
}: Props) {
  // Reinicia el temporizador si "search" cambia antes de que venza el delay
  useEffect(() => {
    const debounde = setTimeout(() => {
      sendMovie(isSearchError)
    }, delay)

    return () => clearTimeout(debounde)
  }, [
    search,
    isSearchError,
    delay,
    sendMovie
  ])
}