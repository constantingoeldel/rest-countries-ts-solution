import * as React from 'react'
import styled from 'styled-components'

import { Country } from '../App'

type Props = {
  props: Country
}

export default function CountryDetail({ props }: Props) {
  return (
    <Details>
      <Flag src={props.flag}></Flag>
      <Name>{props.name}</Name>
      <FactList>
        <Fact>
          <b>Native Name:</b>
          {props.nativeName}
        </Fact>
        <Fact>
          <b>Population:</b>
          {props.population}
        </Fact>
        <Fact>
          <b>Region:</b>
          {props.region}
        </Fact>
        <Fact>
          <b>Sub Region:</b>
          {props.subregion}
        </Fact>
        <Fact>
          <b>Capital:</b>
          {props.capital}
        </Fact>
      </FactList>
      <FactList>
        <Fact>
          <b>Top Level Domain:</b>
          {props.topLevelDomain}
        </Fact>
        <Fact>
          <b>Currencies:</b>
          {props.currencies}
        </Fact>
        <Fact>
          <b>Languages:</b>
          {props.languages}
        </Fact>
      </FactList>
      <Borders>Border Countries</Borders>
      <BordersList>
        {props.borders.map(border => (
          <Border>{border}</Border>
        ))}
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
