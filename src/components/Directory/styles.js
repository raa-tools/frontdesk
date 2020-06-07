import styled from "styled-components"

import { H3, COLORS } from "../globals"

export const ScriptNameContainer = styled.div`
  height: 3rem;
  border-bottom: 2px solid ${COLORS.LIGHT_GRAY};
  display: flex;
  justify-content: space-between;
  user-select: none;
  box-sizing: border-box;
`

export const NameInnerContainer = styled.div`
  margin: auto 0;
  display: flex;
  height: ${({ content }) => (content && content === "name" ? "100%" : "")};
  flex: ${props => props.flex};
`

export const ScriptName = styled(H3)`
  margin: auto 0;
  padding-bottom: 1px;
`

export const ScriptsDiv = styled.div`
  height: ${({ open, count }) => (open ? `${count * 3}rem` : 0)};
  overflow-y: hidden;
  transition: height 0.5s;
  padding: 0;
`
