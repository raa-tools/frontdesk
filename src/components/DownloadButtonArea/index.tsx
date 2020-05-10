import React, { FC, ReactElement } from "react"

import DownloadButton, { PropTypes as ButtonProp } from "./DownloadButton"
import { Container, ClearSelection, InnerContainer } from "./styles"

interface PropTypes extends ButtonProp {
  clearSelection: () => void
}

const DownloadButtonArea: FC<PropTypes> = ({
  paths,
  clearSelection,
}): ReactElement => {
  return (
    <Container hidden={!Object.keys(paths).length}>
      <InnerContainer>
        <DownloadButton paths={paths} />
        <ClearSelection onClick={clearSelection}>
          Clear Selection
        </ClearSelection>
      </InnerContainer>
    </Container>
  )
}

export default DownloadButtonArea
