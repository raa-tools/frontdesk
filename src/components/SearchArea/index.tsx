import React, { FC, ReactElement, KeyboardEvent } from "react"

import ClearButton from "../ClearButton"
import {
  Title,
  Container,
  SearchBoxDiv,
  SearchBox,
  SearchFootnote,
  SearchA,
} from "./styles"

type PropTypes = {
  value: string
  handleChange(ev: KeyboardEvent): void
  handleClear(): void
}

const SearchArea: FC<PropTypes> = ({
  value,
  handleChange,
  handleClear,
}): ReactElement => {
  return (
    <Container>
      <Title>Looking for something?</Title>
      <SearchBoxDiv>
        <SearchBox
          placeholder="Start typing to filter the list on the right"
          value={value}
          onChange={handleChange}
        />
        <ClearButton onClick={handleClear} />
      </SearchBoxDiv>
      <SearchFootnote>
        If something isn’t working quite right or you need help installing a
        script, please write to{" "}
        <SearchA href="mailto:jesentanadi@raai.com">Jesen</SearchA>.
      </SearchFootnote>
    </Container>
  )
}

export default SearchArea
