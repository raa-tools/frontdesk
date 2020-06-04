import React, { ReactElement, FC } from "react"

import { Cover, Island, Title, Message } from "./styles"
import { P, A } from "../globals"

type PropTypes = {
  title: string
  messages: string[]
}

const ErrorModal: FC<PropTypes> = ({ title, messages }): ReactElement => {
  return (
    <Cover>
      <Island>
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
      </Island>
    </Cover>
  )
}

export default ErrorModal
