import styled from "styled-components"
import { SmallButton } from "../globals"

export const ReadmeButton = styled(SmallButton)`
  background-color: #35a9ea;
  color: white;
  position: relative;
  float: right;
  transition: background-color ease 0.35s;

  &:hover {
    background-color: #1886c5;
  }
`

export const GithubButton = styled(ReadmeButton)`
  background-color: #e4e4e4;
  color: black;
  font-weight: 500;
  margin: auto 0;

  &:hover {
    background-color: #c2c2c2;
  }
`
