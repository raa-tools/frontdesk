import React, { ReactElement, useState, useEffect, ChangeEvent } from "react"

// Utils and Types
import { CheckedList } from "../../types"
import getGithubUrl from "../../utils/getGithubUrl"

// Components
import Arrow from "../Arrow"
import LinkButton from "../LinkButton"
import ScriptItem from "../ScriptItem"

// Styles
import {
  ScriptsDiv,
  ScriptNameContainer,
  ScriptName,
  NameInnerContainer,
} from "./styles"

type PropType = {
  repoName: string
  dirContents: Array<string>
  dirName: string
  checkedItems: CheckedList
  handleSelect(e: ChangeEvent<HTMLInputElement>): void
  handleOpenCount: (offset: number) => void
}

const ScriptDir: React.FC<PropType> = ({
  repoName,
  dirContents,
  dirName,
  checkedItems,
  handleSelect,
  handleOpenCount,
}): ReactElement => {
  const readmeFile = dirContents.find(filename => filename === "readme.md")
  const scriptFiles = dirContents.filter(filename => filename !== "readme.md")

  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState(false)
  const handleOpen = (): void => {
    setOpen(prev => !prev)
    setClicked(true)
  }

  useEffect(() => {
    if (!clicked) return

    const numScripts = scriptFiles.length
    if (open) {
      handleOpenCount(numScripts)
    } else {
      handleOpenCount(-numScripts)
    }
  }, [open])

  return (
    <div className="directory">
      <ScriptNameContainer>
        <NameInnerContainer flex={1} content="name" onClick={handleOpen}>
          <Arrow open={open} />
          <ScriptName>{dirName}</ScriptName>
        </NameInnerContainer>

        <NameInnerContainer>
          {readmeFile ? (
            <LinkButton
              type="readme"
              href={getGithubUrl(repoName, dirName, readmeFile)}
            />
          ) : null}
        </NameInnerContainer>
      </ScriptNameContainer>
      <ScriptsDiv open={open} count={scriptFiles.length}>
        {scriptFiles.map((file, i) => (
          <ScriptItem
            key={i}
            repoName={repoName}
            dirName={dirName}
            file={file}
            checkedItems={checkedItems}
            handleChange={handleSelect}
          />
        ))}
      </ScriptsDiv>
    </div>
  )
}

export default ScriptDir
