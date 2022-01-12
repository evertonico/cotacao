import React, { createContext, ReactElement, useEffect, useState } from 'react';

interface Prop {
  children: ReactElement
}

export const CurrencyContext = createContext({});

export default function CurrencyProvider({children}:Prop) {
  const [currencyNameList, setCurrencies] = useState<CurrencyName[]>([])

  const [latestExchangeRates, setLatestExchangeRates] = useState<CurrencyValue[]>([])

  useEffect(() => {
    const hasName = latestExchangeRates.some(item => item.name)
    if(latestExchangeRates.length > 0 && !hasName && currencyNameList.length > 0 ){
      setExchangeRates(latestExchangeRates)
    }
  }, [latestExchangeRates])

  function setNames(coins: CurrencyName[]){
    setCurrencies(coins)
  }

  function setExchangeRates(coins: CurrencyValue[]){
    if(currencyNameList.length > 0){
      const exchangeRates = coins.map(currency => {
        console.log(currency)
        return {...currency, name: getByCode(currency.key).value || ''}
      })
      const filteredList = exchangeRates.filter(item => item.name).sort((a,b) => b.value - a.value)
      setLatestExchangeRates(filteredList)
    } else {
      setLatestExchangeRates(coins)
    }
  }

  function getByCode(code: string){
    return currencyNameList.find((item: CurrencyName) => item.key === code) || {key: null, value: null}
  }

  return (
    <CurrencyContext.Provider value={{latestExchangeRates, currencyNameList, getByCode, setNames, setExchangeRates}}>
      {children}
    </CurrencyContext.Provider>
  );
}
