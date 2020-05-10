import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  margin: auto 0;
  margin-right: 1rem;
  transition: transform ease 0.15s;
  padding-top: 2px;

  ${props =>
    props.open &&
    `
      transform: rotate(90deg);
    `}
`
