import * as React from 'react'
import styled from 'styled-components'

import { Country } from '../App'
import Flag from './Flag'

export default function CountryCard({
  country,
  onClick,
}: {
  country: Country
  onClick: () => void
}) {
  const { flag, population, capital, region, name } = country
  return (
    <Card
      onClick={event => {
        event.preventDefault()
        onClick()
      }}>
      <Flag src={flag} />
      <Name>{name}</Name>
      <FactList>
        <Fact>
          <b>Population:</b>
          {population}
        </Fact>
        <Fact>
          <b>Region:</b>
          {region}
        </Fact>
        <Fact>
          <b>Capital:</b>
          {capital}
        </Fact>
      </FactList>
    </Card>
  )
}

const Card = styled.div`
  background: white;
`

const Name = styled.h3``

const FactList = styled.ul``

const Fact = styled.li``
