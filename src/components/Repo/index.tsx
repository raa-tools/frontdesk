import React, { ReactElement, useState, ChangeEvent } from "react"

import { H2 } from "../globals"
import { RepoName, RepoDiv, DirsDiv } from "./styles"

import Directory from "../Directory"

import { Dir, CheckedList } from "../../types"

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
  const [open, setOpen] = useState(true)

  return (
    <RepoDiv className="repo">
      <RepoName>
        <H2 onClick={(): void => setOpen(prev => !prev)}>{repoName}</H2>
      </RepoName>
      <DirsDiv open={open} count={Object.keys(dirs).length - 2}>
        {Object.keys(dirs).map((dirName, i) => {
          if (dirName === "." || dirName === "z-Archive") return null
          const dirContents = dirs[dirName]["."]
          return (
            <Directory
              key={i}
              repo={repoName}
              dirContents={dirContents}
              dirName={dirName}
              checkedItems={checkedItems}
              handleSelect={handleSelect}
            />
          )
        })}
      </DirsDiv>
    </RepoDiv>
  )
}

export default Repo
