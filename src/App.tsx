import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import CountryCard from './components/CountryCard'
import CountryDetail from './components/CountryDetail'

export type Country = {
  currencies: {
    code: string
    name: string
    symbol: string
  }[]
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
  name: string
  topLevelDomain: string[]
  capital: string
  region: string
  subregion: string
  population: number
  borders: string[]
  nativeName: string
  flag: string
}
type CountryData = Country[]

export default function App() {
  const [countryData, setCountryData] = useState<CountryData | null>(null)
  const [detailedCountry, setDetailedCountry] = useState<number | null>(null)
  // const [darkmode, setDarkmode] = useState(false)
  useEffect(() => {
    fetchCountryData()
  }, [])

  console.log(countryData)
  return (
    <>
      <Header></Header>
      <Main>
        {detailedCountry ??
          countryData?.map((country: Country) => (
            <CountryCard
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              population={country.population}
              region={country.region}
              key={country.name}
            />
          ))}
        {detailedCountry && countryData && (
          <CountryDetail
            key={countryData[detailedCountry].name}
            country={countryData[detailedCountry]}
          />
        )}
      </Main>
    </>
  )

  function fetchCountryData(): void {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag'
    )
      .then(res => res.json())
      .then(res => setCountryData(res))
      .catch(error => console.log(error))
  }
}

const Main = styled.main`
  background: var(--lightmodeBackground);
`
