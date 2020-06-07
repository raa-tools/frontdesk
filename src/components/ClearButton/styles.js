import styled from "styled-components"

import { CircularButton, COLORS } from "../globals"

export const ClearBtn = styled(CircularButton)`
  background-color: ${COLORS.LIGHT_GRAY};
  margin-left: 0.5rem;
  transition: background-color ease 0.35s;

  &:hover,
  &:focus {
    background-color: ${COLORS.MID_GRAY};
  }
`
