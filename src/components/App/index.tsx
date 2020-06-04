import React, { useState, useEffect, ReactElement, KeyboardEvent } from "react"

// Utils and Types
import { CheckedList } from "../../types"
import { useDropdown, useFilteredRepos, useRepos } from "./hooks"

// Components
import DownloadButtonArea from "../DownloadButtonArea"
import Listing from "../Listing"
import SearchArea from "../SearchArea"
import Loading from "../Loading"

// Styles
import { Container, RightSection, LeftSection } from "./styles"

const App: React.FC<{}> = (): ReactElement => {
  const [repos, loading] = useRepos()
  const {
    reposOpen,
    handleRepoDropdown,
    dirsOpen,
    handleDirDropdown,
  } = useDropdown(repos)

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
    location.hash = target.value
  }

  const handleClearSearch = (): void => {
    setSearchVal("")
    filterRepos("")
    location.hash = ""
  }

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "")
    if (hash) {
      setSearchVal(hash)
      filterRepos(hash)
    }
  }, [repos.length])

  return (
    <>
      <Loading loading={loading} />
      <Container>
        <LeftSection>
          <SearchArea
            value={searchVal}
            handleChange={handleSearch}
            handleClear={handleClearSearch}
          />
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
