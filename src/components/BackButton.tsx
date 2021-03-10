import * as React from 'react'
import styled from 'styled-components'

export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={event => {
        onClick()
      }}>
      Back
    </Button>
  )
}

const Button = styled.button``
