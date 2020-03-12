import styled, { css } from "styled-components"

const RepoName = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: tomato;
  cursor: pointer;
`

const RepoDiv = styled.div`
  width: 50%;
  margin: 0 auto;
`

const DirsDiv = styled.div`
  overflow-y: hidden;
  margin-bottom: 0.5rem;
  transition: height 0.5s;

  ${props =>
    !props.open &&
    css`
      height: 0;
    `}
`

export { RepoName, RepoDiv, DirsDiv }
