import styled from "styled-components"

import { H1, Footnote, A } from "../globals"

export const Container = styled.div`
  margin: auto auto auto 16.67%;
  width: 50%;
`

export const Title = styled(H1)`
  color: white;
  line-height: 1.1;
`

export const SearchBox = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  height: 2rem;
  margin-top: 1.75rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

  &::placeholder {
    font-style: italic;
  }
`

export const SearchFootnote = styled(Footnote)`
  color: white;
  margin-top: 1.75rem;
`

export const SearchA = styled(A)`
  color: white;

  &:visited {
    color: white;
  }
`
