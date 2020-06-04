import React, { ReactElement, FC, useState } from "react"

import { Cover, Island, Title, Message, CloseButton } from "./styles"
import { P, A } from "../globals"

type PropTypes = {
  title: string
  messages: string[]
}

const ErrorModal: FC<PropTypes> = ({ title, messages }): ReactElement => {
  const [show, setShow] = useState(true)
  return show ? (
    <Cover>
      <Island>
        <div>
          <Title>{title}</Title>
          {messages.map((message, i) => (
            <Message key={`message-${i}`}>{message}</Message>
          ))}
          <P style={{ marginTop: "1.5rem" }}>
            Please try again. If the error persists, e-mail{" "}
            <A href="mailto:jesentanadi@raai.com?subject=RTD Repo Fetching Error">
              Jesen
            </A>
            .
          </P>
        </div>
        <CloseButton onClick={(): void => setShow(false)}>Close</CloseButton>
      </Island>
    </Cover>
  ) : null
}

export default ErrorModal
