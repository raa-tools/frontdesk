import React, { ReactElement, useState, useEffect } from "react"

import { DownloadBtn } from "./styles"

import { CheckedList } from "../../types"

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
    const newQueryString = Object.keys(paths).reduce((acc, key, i) => {
      const { repo, dirName, file } = JSON.parse(key)
      const query = `user=raa-tools&repo=${repo}&file=${dirName}%2F${file}`
      if (i === 0) {
        acc = query
      } else {
        acc += `&${query}`
      }
      return acc
    }, "")

    setQueryString(newQueryString)
  }, [paths])

  return (
    <a href={`https://raa-zipline.herokuapp.com/?${queryString}`}>
      <DownloadBtn onClick={handleClick}>Download</DownloadBtn>
    </a>
  )
}

export default DownloadButton
