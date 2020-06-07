import styled from "styled-components"

import { Button, COLORS } from "../../globals"

export const DownloadAnchor = styled.a`
  margin: auto;
`

export const DownloadBtn = styled(Button)`
  background-color: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
  transition: background-color ease 0.35s;

  &:hover,
  &:focus {
    background-color: ${COLORS.DARK_GREEN};
  }

  &:disabled {
    background-color: ${COLORS.MID_GRAY};
    cursor: not-allowed;
  }
`
