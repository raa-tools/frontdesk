import styled from "styled-components"

export enum COLORS {
  GREEN = "#17BA4F",
  DARK_GREEN = "#0F983D",
  BLUE = "#35A9EA",
  DARK_BLUE = "#1886C5",
  NAVY = "#043051",
  RED = "#EE4C4C",
  DARK_RED = "#CA3030",
  LIGHT_GRAY = "#E4E4E4",
  MID_GRAY = "#C2C2C2",
  DARK_GRAY = "#999999",
  WHITE = "#FFFFFF",
  BLACK = "#000000",
}

export const H1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 3.375rem;
  margin: 0;
`

export const H2 = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
`

export const H3 = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0;
`

export const H4 = styled(H3)`
  font-weight: regular;
`

export const P = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  margin: 0;
`

export const Footnote = styled(P)`
  line-height: 1.35;
  font-size: 0.8125rem;
`

export const A = styled.a`
  color: ${COLORS.BLACK};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:visited {
    color: ${COLORS.BLACK};
  }
`

export const Button = styled.button`
  height: 2.75rem;
  width: 16.25rem;
  border-radius: 2.75rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`

export const SmallButton = styled(Button)`
  width: 8.25rem;
  height: 1.625rem;
  border-radius: 1.625rem;
  font-size: 0.875rem;
`

export const CircularButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`
