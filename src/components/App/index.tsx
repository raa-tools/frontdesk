import React, { useState, useEffect, ReactElement, KeyboardEvent } from "react"

// Utils and Types
import { CheckedList } from "../../types"
import { useRepos, useFilteredRepos } from "./hooks"

// Components
import DownloadButtonArea from "../DownloadButtonArea"
import Listing from "../Listing"
import SearchArea from "../SearchArea"
import Loading from "../Loading"

// Styles
import { Container, RightSection, LeftSection } from "./styles"

const App: React.FC<{}> = (): ReactElement => {
  const [repos, loading] = useRepos()

  const [downloadPaths, setDownloadPaths] = useState<CheckedList>({})
  const handleSelect = (id: string, checked: boolean): void => {
    const nowChecked = !checked
    if (nowChecked) {
      setDownloadPaths(prev => ({ ...prev, [id]: true }))
    } else {
      const newPaths = { ...downloadPaths }
      delete newPaths[id]
      setDownloadPaths(newPaths)
    }
  }

  const handleClearSelection = (): void => {
    setDownloadPaths({})
  }

  const [filteredRepos, filterRepos] = useFilteredRepos(repos)
  const [searchVal, setSearchVal] = useState("")
  const handleSearch = (ev: KeyboardEvent): void => {
    const target = ev.target as HTMLInputElement
    setSearchVal(target.value)
    filterRepos(target.value)
  }

  const [reposOpen, setReposOpen] = useState({})
  const [dirsOpen, setDirsOpen] = useState({})
  useEffect(() => {
    const reposInitialState = repos.reduce((acc, repo) => {
      acc[repo.name] = false
      return acc
    }, {})

    const dirsInitialState = repos.reduce((acc, repo) => {
      const validDirs = Object.keys(repo.dirs).filter(item => item !== ".")
      const dirObj = validDirs.reduce((dirAcc, dir) => {
        dirAcc[dir] = false
        return dirAcc
      }, {})

      return { ...acc, [repo.name]: dirObj }
    }, {})

    setReposOpen(reposInitialState)
    setDirsOpen(dirsInitialState)
  }, [repos])

  const handleRepoDropdown = (repoName: string): void => {
    const newState = { ...reposOpen }
    newState[repoName] = !newState[repoName]
    setReposOpen(newState)
  }

  const handleDirDropdown = (repoName: string, dirName: string): void => {
    const newState = { ...dirsOpen }
    newState[repoName][dirName] = !newState[repoName][dirName]
    setDirsOpen(newState)
  }

  return (
    <>
      <Loading loading={loading} />
      <Container>
        <LeftSection>
          <SearchArea value={searchVal} handleChange={handleSearch} />
        </LeftSection>
        <RightSection>
          <Listing
            repos={filteredRepos}
            checkedItems={downloadPaths}
            reposOpen={reposOpen}
            dirsOpen={dirsOpen}
            handleSelect={handleSelect}
            handleRepoDropdown={handleRepoDropdown}
            handleDirDropdown={handleDirDropdown}
          />
          <DownloadButtonArea
            paths={downloadPaths}
            clearSelection={handleClearSelection}
          />
        </RightSection>
      </Container>
    </>
  )
}

export default App
