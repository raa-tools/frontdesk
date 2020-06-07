import styled from "styled-components"

import { COLORS } from "../globals"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`

export const Section = styled.div`
  height: 100%;
  display: inline-block;
`

export const LeftSection = styled(Section)`
  width: 50%;
  position: fixed;
  background-color: ${COLORS.NAVY};
  display: flex;
`

export const RightSection = styled(Section)`
  width: 50%;
  float: right;
`
