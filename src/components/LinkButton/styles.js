import styled from "styled-components"
import { SmallButton, COLORS } from "../globals"

export const ReadmeButton = styled(SmallButton)`
  background-color: ${COLORS.BLUE};
  color: white;
  position: relative;
  float: right;
  transition: background-color ease 0.35s;

  &:hover,
  &:focus {
    background-color: ${COLORS.DARK_BLUE};
  }
`

export const GithubButton = styled(ReadmeButton)`
  background-color: ${COLORS.LIGHT_GRAY};
  color: black;
  font-weight: 500;
  margin: auto 0;

  &:hover,
  &:focus {
    background-color: ${COLORS.MID_GRAY};
  }
`
