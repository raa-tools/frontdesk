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
  dirsOpen: any
  handleSelect(id: string, checked: boolean): void
  handleDirDropdown(repoName: string, dirName: string): void
}

const ScriptDir: React.FC<PropType> = ({
  repoName,
  dirContents,
  dirName,
  checkedItems,
  dirsOpen,
  handleSelect,
  handleDirDropdown,
}): ReactElement => {
  const readmeFile = dirContents.find(filename => filename === "readme.md")
  const scriptFiles = dirContents.filter(filename => filename !== "readme.md")

  if (!scriptFiles.length) return null

  const handleOpen = (): void => {
    handleDirDropdown(repoName, dirName)
  }

  return (
    <div className="directory">
      <ScriptNameContainer>
        <NameInnerContainer flex={1} content="name" onClick={handleOpen}>
          <Arrow open={dirsOpen[repoName][dirName]} />
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
      <ScriptsDiv open={dirsOpen[repoName][dirName]} count={scriptFiles.length}>
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
