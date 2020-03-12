import styled, { css } from "styled-components"
import { UL } from "../globals"

const ScriptName = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: lightgray;
  cursor: pointer;
`
const ScriptsDiv = styled.div`
  height: ${props => props.count * 1.5 + 0.85}rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;
  overflow-y: hidden;
  background-color: lightblue;
  transition: height 0.5s;

  ${props =>
    !props.open &&
    css`
      height: 0;
      padding-bottom: 0;
    `}
`

const ScriptsUL = styled(UL)`
  margin-top: 0.5rem;
  list-style-type: none;
`

export { ScriptName, ScriptsDiv, ScriptsUL }
