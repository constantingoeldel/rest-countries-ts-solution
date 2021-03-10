import * as React from 'react'
import styled from 'styled-components'

export default function Flag({ src }: { src: string }) {
  return <Image src={src} />
}

const Image = styled.img`
  max-height: 300px;
`
