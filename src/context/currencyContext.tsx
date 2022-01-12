import React, { createContext, ReactElement, Reducer, useEffect, useReducer, useState } from 'react';
import { CurrencyName } from '../services/currencyApi';

interface Prop {
  children: ReactElement
}

export const CurrencyContext = createContext({});

export default function CurrencyProvider({children}:Prop) {
  const [currencies, setCurrencies] = useState<CurrencyName[]>([])

  function setNames(coins: CurrencyName[]){
    setCurrencies(coins)
  }

  function getByCode(code: string){
    return currencies.find((item: CurrencyName) => item.key === code)
  }

  return (
    <CurrencyContext.Provider value={{currencies, setNames, getByCode}}>
      {children}
    </CurrencyContext.Provider>
  );
}
