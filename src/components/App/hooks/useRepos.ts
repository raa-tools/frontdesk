import { useEffect, useState } from "react"

import repoSources, { ziplineAPI } from "../../../utils/repoSources"
import joinPath from "../../../utils/joinPath"

type UseRepos = [any[], any[], boolean]

export default (): UseRepos => {
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState([])
  const [errors, setErrors] = useState([])
  useEffect((): void => {
    const loadRepos = async (): Promise<void> => {
      // Ping zipline to wake server up
      fetch(joinPath(ziplineAPI, "ping"))

      // Get repos info from peekachu
      for (const source of repoSources) {
        try {
          const json = await (await fetch(source.url)).json()
          setRepos(prev => {
            return [...prev, { name: source.name, dirs: json }]
          })
        } catch (e) {
          setErrors(prev => [
            ...prev,
            { repoName: source.name, repoUrl: source.url },
          ])
        }
      }

      setLoading(false)
    }
    loadRepos()
  }, [])

  return [errors, repos, loading]
}
