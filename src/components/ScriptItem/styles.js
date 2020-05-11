import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 3rem;
  margin-left: 2rem;
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  box-sizing: border-box;
`

export const InnerContainer = styled.div`
  margin: auto 0;
  flex: ${props => props.flex};
  position: relative;
  display: flex;

  ${props =>
    props.content === "label" &&
    css`
      height: 100%;
    `}
`

export const Label = styled.label`
  width: 100%;
  height: 100%;
  padding-left: 1.625rem;
  display: flex;
`

export const LabelText = styled.span`
  display: inline-block;
  margin: auto 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  padding-bottom: 2px;
`

// Custom checkbox based on
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox
export const StyledInput = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:hover ~ .custom-checkbox {
    background-color: #c2c2c2;
  }

  &:checked ~ .custom-checkbox {
    background-color: #17ba4f;
  }

  &:checked:hover ~ .custom-checkbox {
    background-color: #0f983d;
  }

  &:checked ~ .custom-checkbox:after {
    display: block;
  }
`

export const CustomCheckbox = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 0.125rem;
  background-color: #e4e4e4;
  top: 1rem;
  left: 0;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 0px;
    left: 5px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
