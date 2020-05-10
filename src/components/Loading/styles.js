import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #043051;
  display: flex;
  z-index: 99;

  ${props =>
    props.loading === "false" &&
    css`
      animation-duration: 0.5s;
      animation-name: fadeout;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
    `}

  @keyframes fadeout {
    from {
      opacity: 100%;
      width: 100%;
      z-index: 99;
    }

    30% {
      opacity: 100%;
      width: 50%;
      z-index: 99;
    }

    to {
      opacity: 0;
      width: 50%;
      z-index: -2;
      display: none;
    }
  }
`

export const Icon = styled.img`
  margin: auto;
  width: 3rem;

  ${props =>
    props.loading === "false" &&
    css`
      display: none;
    `}
`
