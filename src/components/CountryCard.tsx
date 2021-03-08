import * as React from 'react'
import styled from 'styled-components'

interface CountryProps {
  flag: string
  name: string
  population: number
  region: string
  capital: string
}
export default function CountryCard({ flag, name, population, region, capital }: CountryProps) {
  return (
    <Card>
      <Flag src={flag}></Flag>
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

const Flag = styled.img``

const Name = styled.h3``

const FactList = styled.ul``

const Fact = styled.li``
