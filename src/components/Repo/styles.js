import styled, { css } from "styled-components"
import { H2 } from "../globals"

export const RepoNameContainer = styled.div`
  height: 4rem;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  user-select: none;
`

export const NameInnerContainer = styled.div`
  margin: auto 0;
  display: flex;
  height: ${({ content }) => (content && content === "name" ? "100%" : "")};
  flex: ${props => props.flex};
`

export const DirName = styled(H2)`
  margin: auto 0;
  padding-bottom: 2px;
`

export const RepoDiv = styled.div`
  width: 66.67%;
  margin: 0 auto;
  min-width: 29.5rem;
  max-width: 62rem;
`

export const DirsDiv = styled.div`
  overflow-y: hidden;
  margin-bottom: 0.5rem;
  transition: height ease 0.5s;
  height: ${props => props.count * 3}rem;

  ${props =>
    !props.open &&
    css`
      height: 0;
    `}
`
