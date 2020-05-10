import React, { ReactElement } from "react"

import { Container } from "./styles"

const Arrow = ({ open }): ReactElement => {
  return (
    <Container open={open}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H16V16H0V0Z" fill="white" />
        <path
          d="M11.1136 8.75981L6.65083 12.585C6.00215 13.141 5 12.6801 5 11.8258L5 4.17422C5 3.31987 6.00212 2.85896 6.65079 3.41496L11.1142 7.24074C11.5798 7.63984 11.5792 8.36071 11.1136 8.75981Z"
          fill="black"
        />
      </svg>
    </Container>
  )
}

export default Arrow
