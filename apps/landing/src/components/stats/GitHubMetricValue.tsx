import { useEffect, useState } from "react"
import { getTotalCommits, getTotalStars } from "@services/githubStats"

interface Props {
  metricType: string
}

export function GitHubMetricValue({ metricType }: Props) {
  const [metricValue, setMetricValue] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const fetchMetricValue = async () => {
    try {
      if (metricType === "commits") {
        const fetchedValue = await getTotalCommits()
        setMetricValue(fetchedValue)
      } else {
        const fetchedValue = await getTotalStars()
        setMetricValue(fetchedValue)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMetricValue()
  }, [])

  return (
    <strong className="text-4xl font-bold text-highlight-yellow">
      { isLoading ? '...' : metricValue }
    </strong>
  )
}
