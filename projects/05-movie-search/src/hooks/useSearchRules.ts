import { useEffect, useState } from "react"

interface Props {
  search: string
}

export function useSearchRules ({ search }: Props) {
  const [isSearchError, setIsSearchError] = useState(true)
  const [searchErrorMessage, setSearchErrorMessage] = useState("")

  useEffect(() => {
    if (search === "") {
      setSearchErrorMessage("No se puede buscar una película vacía")
    } else if (/^\d/.test(search)) {
      setSearchErrorMessage("No se puede buscar una película con un número")
    } else if (search.length < 3) {
      setSearchErrorMessage("La búsqueda debe tener al menos 3 caracteres")
    } else {
      setIsSearchError(false)
    }
  }, [search])

  return {
    isSearchError,
    searchErrorMessage
  }
}