import React, { ReactElement, ChangeEvent } from "react"

import { LI } from "../globals"
import { CheckedList } from "../../types"

type PropTypes = {
  repo: string
  dirName: string
  file: string
  checkedItems: CheckedList
  handleChange(e: ChangeEvent<HTMLInputElement>): void
}

const ScriptItem: React.FC<PropTypes> = ({
  repo,
  dirName,
  file,
  checkedItems,
  handleChange,
}): ReactElement => {
  const jsonID = JSON.stringify({ repo, dirName, file })
  return (
    <LI>
      <label>
        <input
          type="checkbox"
          id={jsonID}
          name={jsonID}
          onChange={handleChange}
          checked={!!checkedItems[jsonID]}
        />
        {file}
      </label>
    </LI>
  )
}

export default ScriptItem
