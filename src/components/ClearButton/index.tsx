import React, { FC, ReactElement } from "react"

import { ClearBtn } from "./styles"

type PropTypes = {
  onClick(): void
}

const ClearButton: FC<PropTypes> = ({ onClick }): ReactElement => {
  return (
    <ClearBtn onClick={onClick}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="10.5672"
          width="14.9442"
          height="2.02634"
          transform="rotate(-45 0 10.5672)"
          fill="black"
        />
        <rect
          x="1.43286"
          width="14.9442"
          height="2.02634"
          transform="rotate(45 1.43286 0)"
          fill="black"
        />
      </svg>
    </ClearBtn>
  )
}

export default ClearButton
