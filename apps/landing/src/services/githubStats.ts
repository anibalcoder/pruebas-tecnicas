import type { GitHubRepository, GitHubContributor } from "@interfaces/index"

const API_URL = "https://api.github.com/repos"
const OWNER = "anibalcoder"
const REPO = "pruebas-tecnicas"

export const getTotalStars = async () => {
  try {
    const resp = await fetch (`${ API_URL }/${ OWNER }/${ REPO }`)

    if (!resp.ok) {
      throw new Error('Ups, algo salió mal', {
        cause: `${ resp.status } - ${ resp.statusText }`
      })
    }

    const data = await resp.json() as GitHubRepository
    return data?.stargazers_count
  } catch (error) {
    throw error
  }
}

export const getTotalCommits = async () => {
  try {
    const resp = await fetch (`${ API_URL }/${ OWNER }/${ REPO }/contributors`)

    if (!resp.ok) {
      throw new Error('Ups, algo salió mal', {
        cause: `${ resp.status } - ${ resp.statusText }`
      })
    }

    const data = await resp.json() as GitHubContributor[]
    return data[0]?.contributions
  } catch (error) {
    throw error
  }
}
