import React, { ReactElement } from "react"

type PropType = {
  directoryData: Array<string>
  title: string
}

const ScriptDir: React.FC<PropType> = ({
  directoryData,
  title,
}): ReactElement => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {directoryData.map((file, i) => (
          <p key={i}>{file}</p>
        ))}
      </ul>
    </>
  )
}

export default ScriptDir
