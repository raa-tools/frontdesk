import styled from "styled-components"

import { H1, Footnote, A, COLORS } from "../globals"

export const Container = styled.div`
  margin: auto auto auto 16.67%;
  width: 50%;
`

export const InnerContainer = styled.div`
  margin-top: -1rem;
`

export const Title = styled(H1)`
  color: ${COLORS.WHITE};
  line-height: 1.1;
`

export const SearchBoxDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-top: 1.75rem;
`

export const SearchBox = styled.input.attrs({
  type: "text",
})`
  box-sizing: border-box;
  height: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  flex: 1;
  padding: 0;

  &::placeholder {
    font-style: italic;
  }
`

export const SearchFootnote = styled(Footnote)`
  color: ${COLORS.WHITE};
  margin-top: 1.75rem;
`

export const SearchA = styled(A)`
  color: ${COLORS.WHITE};

  &:visited {
    color: ${COLORS.WHITE};
  }
`
