import * as React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <SiteHeader>
      <Title>Where in the world?</Title>
      {/* <DarkmodeSwitch /> */}
    </SiteHeader>
  )
}

const SiteHeader = styled.header``
const Title = styled.h1`
  font-weight: 800;
`
