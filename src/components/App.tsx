import React, { useState, useEffect, ReactElement } from "react"

import repoSources from "../utils/repoSources"

import Repo from "./Repo"
import Loading from "./Loading"

const App: React.FC<{}> = (): ReactElement => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect((): void => {
    const loadRepos = async (): Promise<void> => {
      for (const source of repoSources) {
        const json = await (await fetch(source.url)).json()
        setRepos(prev => {
          return [...prev, { name: source.name, dirs: json }]
        })
      }
      setLoading(false)
    }
    loadRepos()
  }, [])

  if (!repos.length) return null

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        repos.map((repo, i) => (
          <Repo key={i} repoName={repo.name} dirs={repo.dirs} />
        ))
      )}
    </>
  )
}

export default App
