import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Section = styled.div`
  height: 100%;
  display: inline-block;
`

export const LeftSection = styled(Section)`
  width: 50%;
  position: fixed;
  background-color: #043051;
  display: flex;
`

export const RightSection = styled(Section)`
  width: 50%;
  float: right;
`
