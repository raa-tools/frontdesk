import React, { FC, ReactElement } from "react"
import { Container, Icon } from "./styles"

import spinner from "../../loading-spinner.svg"

type PropTypes = {
  loading: boolean
}

const Loading: FC<PropTypes> = ({ loading }): ReactElement => {
  return (
    <Container loading={loading.toString()}>
      <Icon src={spinner} loading={loading.toString()} />
    </Container>
  )
}

export default Loading
