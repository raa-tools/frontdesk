import React, { ReactElement, useState, useEffect } from "react"

import { DownloadBtn } from "./styles"
import { CheckedList } from "../../types"

import getDateTime from "../../utils/getDateTime"
import joinPath from "../../utils/joinPath"
import { ziplineAPI } from "../../utils/repoSources"

type PropTypes = {
  paths: CheckedList
  handleClick(): void
}

const DownloadButton: React.FC<PropTypes> = ({
  paths,
  handleClick,
}): ReactElement => {
  const [queryString, setQueryString] = useState("")
  useEffect(() => {
    const downloadQuery = Object.keys(paths).reduce((acc, key, i) => {
      const { repo, dirName, file } = JSON.parse(key)
      const query = `user=raa-tools&repo=${repo}&file=${dirName}%2F${file}`
      if (i === 0) {
        acc = query
      } else {
        acc += `&${query}`
      }
      return acc
    }, "")

    setQueryString(`${downloadQuery}&id=${getDateTime()}`)
  }, [paths])

  return queryString ? (
    <a href={joinPath(ziplineAPI, `/get?${queryString}`)}>
      <DownloadBtn onClick={handleClick}>Download</DownloadBtn>
    </a>
  ) : null
}

export default DownloadButton
