import { useEffect, useState } from "react"

import repoSources, { ziplineAPI } from "../../../utils/repoSources"
import joinPath from "../../../utils/joinPath"

export default (): any[] => {
  const [repos, setRepos] = useState([])
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
          console.error(
            `Something went wrong while fetching ${source.name} at ${source.url}\n${e}`
          )
        }
      }
    }
    loadRepos()
  }, [])

  return repos
}
