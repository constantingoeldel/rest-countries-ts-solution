import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import CountryCard from './components/CountryCard'
import CountryDetail from './components/CountryDetail'
import BackButton from './components/BackButton'

export interface Country {
  alpha3Code: string
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

export default function App() {
  const [countryData, setCountryData] = useState<Country[] | null>(null)
  const [detailedCountryCode, setDetailedCountryCode] = useState<string | null>(null)
  useEffect(() => {
    fetchCountryData()
  }, [])
  const detailedCountry =
    countryData?.filter(country => country.alpha3Code === detailedCountryCode)[0] || null

  return (
    <>
      <Header />
      <Main>
        {detailedCountryCode && detailedCountry ? (
          <>
            <BackButton onClick={() => setDetailedCountryCode(null)} />
            <CountryDetail
              detailedCountry={detailedCountry}
              setDetailedCountryCode={setDetailedCountryCode}
            />
          </>
        ) : (
          countryData?.map((country: Country) => (
            <CountryCard
              key={country.alpha3Code}
              country={country}
              onClick={() => setDetailedCountryCode(country.alpha3Code)}
            />
          ))
        )}
      </Main>
    </>
  )

  function fetchCountryData(): void {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;alpha3Code'
    )
      .then(res => res.json())
      .then(res => setCountryData(res))
      .catch(error => console.log(error))
  }
}

const Main = styled.main`
  background: var(--lightmodeBackground);
`
