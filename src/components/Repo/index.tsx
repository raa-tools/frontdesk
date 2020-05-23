import React, { ReactElement, useState, useEffect, ChangeEvent } from "react"

// Utils and Types
import { Dir, CheckedList } from "../../types"
import getGithubUrl from "../../utils/getGithubUrl"

// Components
import Arrow from "../Arrow"
import Directory from "../Directory"
import LinkButton from "../LinkButton"

// Styles
import {
  RepoNameContainer,
  NameInnerContainer,
  DirName,
  RepoDiv,
  DirsDiv,
} from "./styles"

type PropTypes = {
  repoName: string
  dirs: Dir
  checkedItems: CheckedList
  reposOpen: any
  dirsOpen: any
  handleSelect(id: string, checked: boolean): void
  handleRepoDropdown(repoName: string): void
  handleDirDropdown(repoName: string, dirName: string): void
}

const Repo: React.FC<PropTypes> = ({
  repoName,
  dirs,
  checkedItems,
  reposOpen,
  dirsOpen,
  handleSelect,
  handleRepoDropdown,
  handleDirDropdown,
}): ReactElement => {
  const current = dirs["."] as string[]
  const readmeFile = current
    ? current.find(file => file.toLowerCase() === "readme.md")
    : null
  const validDirNames = Object.keys(dirs).filter(
    dir => dir !== "." && dir !== "z-Archive"
  )

  const handleOpen = (): void => {
    handleRepoDropdown(repoName)
  }

  const [totalDirsOpen, setTotalDirsOpen] = useState(0)
  useEffect(() => {
    const total = validDirNames.reduce((acc: number, dirName: string) => {
      const dirContents = dirs[dirName]["."]
      const scriptFiles = dirContents.filter(
        (filename: string) => filename !== "readme.md"
      )

      if (reposOpen[repoName] && scriptFiles.length) {
        acc += 1
      }

      if (dirsOpen[repoName][dirName]) {
        acc += scriptFiles.length
      }
      return acc
    }, 0)

    setTotalDirsOpen(total)
  }, [dirs, reposOpen, dirsOpen])

  return (
    <RepoDiv className="repo">
      <RepoNameContainer>
        <NameInnerContainer flex={1} content="name" onClick={handleOpen}>
          <Arrow open={reposOpen[repoName]} />
          <DirName>{repoName}</DirName>
        </NameInnerContainer>

        <NameInnerContainer>
          {readmeFile ? (
            <LinkButton
              type="readme"
              href={getGithubUrl(repoName, readmeFile)}
            />
          ) : null}
        </NameInnerContainer>
      </RepoNameContainer>

      <DirsDiv open={reposOpen[repoName]} count={totalDirsOpen}>
        {validDirNames.map((dirName, i) => {
          const dirContents = dirs[dirName]["."]
          return (
            <Directory
              key={i}
              repoName={repoName}
              dirContents={dirContents}
              dirName={dirName}
              checkedItems={checkedItems}
              dirsOpen={dirsOpen}
              handleSelect={handleSelect}
              handleDirDropdown={handleDirDropdown}
            />
          )
        })}
      </DirsDiv>
    </RepoDiv>
  )
}

export default Repo
