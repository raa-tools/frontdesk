import React, { ReactElement, useState, useEffect } from "react"

import { DownloadBtn } from "./styles"
import { CheckedList } from "../../types"

import getDateTime from "../../utils/getDateTime"

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

  return (
    <a href={`https://raa-zipline.herokuapp.com/get?${queryString}`}>
      <DownloadBtn onClick={handleClick}>Download</DownloadBtn>
    </a>
  )
}

export default DownloadButton
