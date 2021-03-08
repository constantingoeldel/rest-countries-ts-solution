import * as React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => {}
}

export default function BackButton({ onClick }: Props) {
  return <Button onClick={onClick}>Back</Button>
}

const Button = styled.button``
