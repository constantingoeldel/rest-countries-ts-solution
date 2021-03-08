import * as React from 'react'
import styled from 'styled-components'

import { Country } from '../App'

export default function CountryDetail(country: Country) {
  return (
    <Details>
      <Flag src={country.flag}></Flag>
      <Name>{country.name}</Name>
      <FactList>
        <Fact>
          <b>Native Name:</b>
          {country.nativeName}
        </Fact>
        <Fact>
          <b>Population:</b>
          {country.population}
        </Fact>
        <Fact>
          <b>Region:</b>
          {country.region}
        </Fact>
        <Fact>
          <b>Sub Region:</b>
          {country.subregion}
        </Fact>
        <Fact>
          <b>Capital:</b>
          {country.capital}
        </Fact>
      </FactList>
      <FactList>
        <Fact>
          <b>Top Level Domain:</b>
          {country.topLevelDomain}
        </Fact>
        <Fact>
          <b>Currencies:</b>
          {country.currencies}
        </Fact>
        <Fact>
          <b>Languages:</b>
          {country.languages}
        </Fact>
      </FactList>
      <Borders>Border Countries</Borders>
      <BordersList>
        {country.borders.map((border: string) => {
          ;<Border>{border}</Border>
        })}
      </BordersList>
    </Details>
  )
}

const Details = styled.div`
  background: var(--lightmodeBackground);
`

const Flag = styled.img``

const Name = styled.h3``

const Borders = styled.h4``

const FactList = styled.ul``

const Fact = styled.li``

const BordersList = styled.ul``

const Border = styled.li``
