import React, { useState, useEffect, ReactElement } from "react"

import ScriptDir from "./ScriptDir"

const App: React.FC<{}> = (): ReactElement => {
  const [scripts, setScripts] = useState({})

  useEffect((): void => {
    fetch("https://raa-operator.herokuapp.com/api/repo/indd")
      .then(data => data.json())
      .then(dirs => setScripts(dirs))
  }, [])

  return (
    <>
      <h2>RAA InDesign Scripts</h2>
      <ul>
        {Object.keys(scripts).map((dirName, i) =>
          dirName === "z-Archive" || dirName === "." ? null : (
            <ScriptDir
              key={i}
              dirContents={scripts[dirName]["."]}
              dirName={dirName}
            />
          )
        )}
      </ul>
    </>
  )
}

export default App
