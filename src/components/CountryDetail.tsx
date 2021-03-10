import * as React from 'react'
import styled from 'styled-components'

import { Country } from '../App'
import Flag from './Flag'

export default function CountryDetail({
  detailedCountry,
  setDetailedCountryCode,
}: {
  detailedCountry: Country
  setDetailedCountryCode: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const {
    flag,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    nativeName,
    languages,
    borders,
  } = detailedCountry
  return (
    <Details>
      <Flag src={flag} />
      <Name>{name}</Name>
      <FactList>
        <Fact>
          <b>Native Name:</b>
          {nativeName}
        </Fact>
        <Fact>
          <b>Population:</b>
          {population}
        </Fact>
        <Fact>
          <b>Region:</b>
          {region}
        </Fact>
        <Fact>
          <b>Sub Region:</b>
          {subregion}
        </Fact>
        <Fact>
          <b>Capital:</b>
          {capital}
        </Fact>
      </FactList>
      <FactList>
        <Fact>
          <b>Top Level Domain:</b>
          {topLevelDomain[0]}
        </Fact>
        <Fact>
          <b>Currencies:</b>
          {listItems(currencies)}
        </Fact>
        <Fact>
          <b>Languages:</b>
          {listItems(languages)}
        </Fact>
      </FactList>
      <Borders>Border Countries</Borders>
      <BordersList>
        {borders.map(border => (
          <Border
            onClick={event => {
              event.preventDefault()
              setDetailedCountryCode(border)
            }}
            key={border}>
            {border}
          </Border>
        ))}
      </BordersList>
    </Details>
  )
  function listItems(items: { name: string }[]): string[] {
    return items.map(item => item.name)
  }
}

const Details = styled.div`
  background: var(--lightmodeBackground);
`

const Name = styled.h3``

const Borders = styled.h4``

const FactList = styled.ul``

const Fact = styled.li``

const BordersList = styled.div`
  display: flex;
`

const Border = styled.button``
