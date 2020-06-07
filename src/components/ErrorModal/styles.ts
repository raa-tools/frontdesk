import styled from "styled-components"

import { H3, P, SmallButton, COLORS } from "../globals"

export const Island = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-width: 650px;
  max-width: 675px;
  margin: auto;
  padding: 2rem;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 999;
`

export const Title = styled(H3)`
  color: ${COLORS.RED};
  margin-bottom: 1rem;
`

export const Message = styled(P)`
  margin-bottom: 0.5rem;
`

export const CloseButton = styled(SmallButton)`
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
  margin: 1.5rem auto 0 auto;

  &:hover,
  &:focus {
    background-color: ${COLORS.DARK_RED};
  }
`
