import React, { FC, ReactElement, useState, useEffect } from "react"

// Utils and Types
import getDateTime from "../../../utils/getDateTime"
import joinPath from "../../../utils/joinPath"
import { ziplineAPI } from "../../../utils/repoSources"
import { CheckedList } from "../../../types"

// Styles
import { DownloadBtn, DownloadAnchor } from "./styles"

export type PropTypes = {
  paths: CheckedList
}

const DownloadButton: FC<PropTypes> = ({ paths }): ReactElement => {
  const [queryString, setQueryString] = useState("")
  useEffect(() => {
    const downloadQuery = Object.keys(paths).reduce((acc, key, i) => {
      const { repoName, dirName, file } = JSON.parse(key)
      const query = `user=raa-tools&repo=${repoName}&file=${dirName}%2F${file}`
      if (i === 0) {
        acc = query
      } else {
        acc += `&${query}`
      }
      return acc
    }, "")

    if (downloadQuery) {
      setQueryString(`${downloadQuery}&id=${getDateTime()}`)
    }
  }, [paths])

  return (
    <DownloadAnchor href={joinPath(ziplineAPI, `get?${queryString}`)}>
      <DownloadBtn>Download Selected Scripts</DownloadBtn>
    </DownloadAnchor>
  )
}

export default DownloadButton
