import * as React from 'react'
import styled from 'styled-components'

import { Country } from '../App'

export default function CountryDetail({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}: Country) {
  return (
    <Details>
      <Flag src={flag}></Flag>
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
          {topLevelDomain}
        </Fact>
        <Fact>
          <b>Currencies:</b>
          {currencies}
        </Fact>
        <Fact>
          <b>Languages:</b>
          {languages}
        </Fact>
      </FactList>
      <Borders>Border Countries</Borders>
      <BordersList>
        {borders.map((border: string) => {
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
