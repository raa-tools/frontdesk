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
    <div>
      <ul>
        {Object.keys(scripts).map((dir, i) =>
          dir === "z-Archive" || dir === "." ? null : (
            <ScriptDir key={i} directoryData={scripts[dir]["."]} title={dir} />
          )
        )}
      </ul>
    </div>
  )
}

export default App
