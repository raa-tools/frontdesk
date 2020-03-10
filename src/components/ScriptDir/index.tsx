import React, { ReactElement } from "react"

type PropType = {
  dirContents: Array<string>
  dirName: string
}

const getCDN = (dir: string, fileName: string): string => {
  return `https://cdn.jsdelivr.net/gh/raa-scripts/indd/${dir}/${fileName}`
}

const ScriptDir: React.FC<PropType> = ({
  dirContents,
  dirName,
}): ReactElement => {
  return (
    <>
      <h3>{dirName}</h3>
      <ul>
        {dirContents.map((file, i) => (
          <li key={i}>
            <a href={getCDN(dirName, file)}>{file}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ScriptDir
