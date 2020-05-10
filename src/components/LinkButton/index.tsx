import React, { FC, ReactElement } from "react"

import { ReadmeButton, GithubButton } from "./styles"

type PropTypes = {
  type: string
  href: string
}

const LinkButton: FC<PropTypes> = ({ type, href }): ReactElement => {
  const renderButton = (): ReactElement => {
    switch (type) {
      case "readme":
        return <ReadmeButton>View readme</ReadmeButton>
      case "github":
        return <GithubButton>View on GitHub</GithubButton>
    }
  }

  return (
    /* eslint-disable react/jsx-no-target-blank */
    <a href={href} rel="noopener noreferer" target="_blank">
      {renderButton()}
    </a>
  )
}

export default LinkButton
