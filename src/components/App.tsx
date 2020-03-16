import React, { useState, useEffect, ReactElement, ChangeEvent } from "react"

import repoSources from "../utils/repoSources"
import { CheckedList } from "../types"

import DownloadButton from "./DownloadButton"
import Loading from "./Loading"
import Repo from "./Repo"

const App: React.FC<{}> = (): ReactElement => {
  const [repos, setRepos] = useState([])
  useEffect((): void => {
    const loadRepos = async (): Promise<void> => {
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

  const [downloadPaths, setDownloadPaths] = useState<CheckedList>({})
  const handleSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    // const downloadTarget: DownloadTarget = JSON.parse(e.target.id)
    const { id } = e.target

    if (e.target.checked) {
      setDownloadPaths(prev => ({ ...prev, [id]: true }))
    } else {
      setDownloadPaths(prev => ({ ...prev, [id]: false }))
    }
  }

  const handleDownload = (): void => {
    // clear selects
    setDownloadPaths({})
  }

  return (
    <>
      {!repos.length ? (
        <Loading />
      ) : (
        <div>
          <DownloadButton paths={downloadPaths} handleClick={handleDownload} />
          {repos.map((repo, i) => (
            <Repo
              key={i}
              repoName={repo.name}
              dirs={repo.dirs}
              handleSelect={handleSelect}
              checkedItems={downloadPaths}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default App
