import styled from "styled-components"

import { Button } from "../../globals"

export const DownloadAnchor = styled.a`
  margin: auto;
`

export const DownloadBtn = styled(Button)`
  background-color: #17ba4f;
  color: white;
  transition: background-color ease 0.35s;

  &:hover {
    background-color: #0f983d;
  }

  &:disabled {
    background-color: #c2c2c2;
    cursor: not-allowed;
  }
`
