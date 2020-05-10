import React, { FC, ReactElement, KeyboardEvent } from "react"

import { Title, Container, SearchBox, SearchFootnote, SearchA } from "./styles"

type PropTypes = {
  value: string
  handleChange: (ev: KeyboardEvent) => void
}

const SearchArea: FC<PropTypes> = ({ value, handleChange }): ReactElement => {
  return (
    <Container>
      <Title>Looking for something?</Title>
      <SearchBox
        placeholder="Start typing to filter the list on the right"
        value={value}
        onChange={handleChange}
      />
      <SearchFootnote>
        If something isn’t working quite right or you need help installing a
        script, please write to{" "}
        <SearchA href="mailto:jesentanadi@raai.com">Jesen</SearchA>.
      </SearchFootnote>
    </Container>
  )
}

export default SearchArea
