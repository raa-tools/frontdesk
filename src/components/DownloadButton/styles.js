import styled from "styled-components"

import { Button } from "../globals"

const DownloadBtn = styled(Button)`
  background-color: lightblue;
  border-radius: 0.5rem;
  height: 3rem;
  width: 8rem;
  position: fixed;
  top: calc(50% - 1.5rem);
  left: calc(12.5% - 4rem);

  &:hover {
    box-shadow: 0px 0px 0.75rem lightblue;
  }
`

export { DownloadBtn }
