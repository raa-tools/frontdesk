import React, { ReactElement } from "react"

import Repo from "../Repo"
import { Container } from "./styles"

const Listing = ({ repos, checkedItems, handleSelect }): ReactElement => {
  return (
    <Container>
      {repos.map((repo, i) => {
        return (
          <Repo
            key={`repo-${i}`}
            repoName={repo.name}
            dirs={repo.dirs}
            checkedItems={checkedItems}
            handleSelect={handleSelect}
          />
        )
      })}
    </Container>
  )
}

export default Listing
