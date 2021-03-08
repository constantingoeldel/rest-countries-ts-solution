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

const SiteHeader = styled.header`
  height: 10vh;
  position: fixed;
`
const Title = styled.h1`
  font-weight: 800;
`
