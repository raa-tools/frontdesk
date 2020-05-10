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
  handleSelect(e: ChangeEvent<HTMLInputElement>): void
}

const Repo: React.FC<PropTypes> = ({
  repoName,
  dirs,
  checkedItems,
  handleSelect,
}): ReactElement => {
  const current = dirs["."] as string[]
  const readmeFile = current
    ? current.find(file => file.toLowerCase() === "readme.md")
    : null
  const validDirNames = Object.keys(dirs).filter(
    dir => dir !== "." && dir !== "z-Archive"
  )

  const [totalDirsOpen, setTotalDirsOpen] = useState(validDirNames.length)
  const handleOpenCount = (offset: number): void => {
    setTotalDirsOpen(prev => prev + offset)
  }

  const [open, setOpen] = useState(false)
  const handleOpen = (): void => {
    setOpen(prev => !prev)
  }

  return (
    <RepoDiv className="repo">
      <RepoNameContainer>
        <NameInnerContainer flex={1} content="name" onClick={handleOpen}>
          <Arrow open={open} />
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

      <DirsDiv open={open} count={totalDirsOpen}>
        {validDirNames.map((dirName, i) => {
          const dirContents = dirs[dirName]["."]
          return (
            <Directory
              key={i}
              repoName={repoName}
              dirContents={dirContents}
              dirName={dirName}
              checkedItems={checkedItems}
              handleSelect={handleSelect}
              handleOpenCount={handleOpenCount}
            />
          )
        })}
      </DirsDiv>
    </RepoDiv>
  )
}

export default Repo
