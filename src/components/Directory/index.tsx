import React, { ReactElement, useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"

import { H3, LI } from "../globals"
import { ScriptsDiv, ScriptsUL, ScriptName } from "./styles"

import getCDN from "../../utils/getCDN"
import fetchRaw from "../../utils/fetchRaw"

type PropType = {
  repo: string
  dirContents: Array<string>
  dirName: string
}

const ScriptDir: React.FC<PropType> = ({
  repo,
  dirContents,
  dirName,
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
    <>
      <ScriptName>
        <H3 onClick={(): void => setOpen(prev => !prev)}>{dirName}</H3>
      </ScriptName>
      <ScriptsDiv open={open} count={dirContents.length}>
        {readme ? <ReactMarkdown source={readme} /> : null}
        <ScriptsUL>
          {scriptFiles.map((file, i) => (
            <LI key={i}>
              <a href={getCDN(repo, dirName, file)}>{file}</a>
            </LI>
          ))}
        </ScriptsUL>
      </ScriptsDiv>
    </>
  )
}

export default ScriptDir
