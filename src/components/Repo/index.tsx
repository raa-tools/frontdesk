import React, { ReactElement, useState } from "react"

import { H2 } from "../globals"
import { RepoName, RepoDiv, DirsDiv } from "./styles"
import Directory from "../Directory"

type Dir = {
  ["."]?: Array<string>
}

type PropTypes = {
  repoName: string
  dirs: Dir
}

const Repo: React.FC<PropTypes> = ({ repoName, dirs }): ReactElement => {
  const [open, setOpen] = useState(true)

  return (
    <RepoDiv>
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
            />
          )
        })}
      </DirsDiv>
    </RepoDiv>
  )
}

export default Repo
