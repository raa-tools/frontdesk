import styled, { css } from "styled-components"

export const Container = styled.div`
  width: calc(50% - 1rem);
  height: 6.5rem;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 33;
  background-color: white;
  transition: transform ease 0.5s;

  ${props =>
    props.hidden &&
    css`
      transform: translateY(6.25rem);
    `}
`

export const InnerContainer = styled.div`
  margin: auto;
  padding-bottom: 1px;
`

export const ClearSelection = styled.button`
  padding: 0;
  border: none;
  background-color: white;
  display: block;
  margin: 0.5rem auto 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`
