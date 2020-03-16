import React, { ReactElement, useState, useEffect, ChangeEvent } from "react"
import ReactMarkdown from "react-markdown"

import { H3 } from "../globals"
import { ScriptsDiv, ScriptsUL, ScriptName } from "./styles"

import ScriptItem from "../ScriptItem"

import fetchRaw from "../../utils/fetchRaw"
import { CheckedList } from "../../types"

type PropType = {
  repo: string
  dirContents: Array<string>
  dirName: string
  checkedItems: CheckedList
  handleSelect(e: ChangeEvent<HTMLInputElement>): void
}

const ScriptDir: React.FC<PropType> = ({
  repo,
  dirContents,
  dirName,
  handleSelect,
  checkedItems,
}): ReactElement => {
  const readmeFile = dirContents.find(filename => filename === "readme.md")
  const scriptFiles = dirContents.filter(filename => filename !== "readme.md")
  const [readme, setReadme] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchReadme = async (): Promise<void> => {
      if (readmeFile) {
        try {
          const text = await fetchRaw(repo, dirName, readmeFile)
          setReadme(text)
        } catch (e) {
          setReadme("Something went wrong... " + e)
        }
      }
    }
    fetchReadme()
  }, [])

  return (
    <div className="directory">
      <ScriptName>
        <H3 onClick={(): void => setOpen(prev => !prev)}>{dirName}</H3>
      </ScriptName>
      <ScriptsDiv open={open} count={dirContents.length}>
        {readme ? <ReactMarkdown source={readme} /> : null}
        <ScriptsUL>
          {scriptFiles.map((file, i) => (
            <ScriptItem
              key={i}
              repo={repo}
              dirName={dirName}
              file={file}
              checkedItems={checkedItems}
              handleChange={handleSelect}
            />
          ))}
        </ScriptsUL>
      </ScriptsDiv>
    </div>
  )
}

export default ScriptDir
