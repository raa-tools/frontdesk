import React, { ReactElement, useRef, ChangeEvent } from "react"

// Utils and Types
import { CheckedList } from "../../types"
import getGithubUrl from "../../utils/getGithubUrl"

// Components
import LinkButton from "../LinkButton"

// Styles
import {
  Container,
  StyledInput,
  InnerContainer,
  Label,
  LabelText,
  CustomCheckbox,
} from "./styles"

type PropTypes = {
  repoName: string
  dirName: string
  file: string
  checkedItems: CheckedList
  handleChange(id: string, checked: boolean): void
}

const ScriptItem: React.FC<PropTypes> = ({
  repoName,
  dirName,
  file,
  checkedItems,
  handleChange,
}): ReactElement => {
  const inputRef = useRef(null)
  const jsonID = JSON.stringify({ repoName, dirName, file })

  return (
    <Container>
      <InnerContainer
        flex={1}
        content="label"
        onClick={(): void => handleChange(jsonID, inputRef.current.checked)}
      >
        <Label>
          <StyledInput
            ref={inputRef}
            className="input-checkbox"
            type="checkbox"
            id={jsonID}
            name={jsonID}
            onChange={(e: ChangeEvent): void => {
              const target = e.target as HTMLInputElement
              handleChange(jsonID, target.checked)
            }}
            checked={!!checkedItems[jsonID]}
          />
          <CustomCheckbox className="custom-checkbox" />
          <LabelText>{file}</LabelText>
        </Label>
      </InnerContainer>

      <InnerContainer>
        <LinkButton
          type="github"
          href={getGithubUrl(repoName, dirName, file)}
        />
      </InnerContainer>
    </Container>
  )
}

export default ScriptItem
