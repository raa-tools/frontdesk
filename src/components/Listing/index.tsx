import React, { ReactElement } from "react"

import Repo from "../Repo"
import { Container } from "./styles"

const Listing = ({
  repos,
  checkedItems,
  reposOpen,
  dirsOpen,
  handleSelect,
  handleRepoDropdown,
  handleDirDropdown,
}): ReactElement => {
  return (
    <Container>
      {repos.map((repo, i) => {
        return (
          <Repo
            key={`repo-${i}`}
            repoName={repo.name}
            dirs={repo.dirs}
            checkedItems={checkedItems}
            reposOpen={reposOpen}
            dirsOpen={dirsOpen}
            handleSelect={handleSelect}
            handleRepoDropdown={handleRepoDropdown}
            handleDirDropdown={handleDirDropdown}
          />
        )
      })}
    </Container>
  )
}

export default Listing
