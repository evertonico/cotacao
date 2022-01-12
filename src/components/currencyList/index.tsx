import React, { useContext, useEffect } from 'react'
import { CurrencyContext } from '../../context/currencyContext'
import CurrencyAPI from '../../services/currencyApi'
import { ContainerList } from './styles'

interface Props {
  getCurrencyCode?: Function
}

const CurrencyList = ({getCurrencyCode}: Props) => {
  const {latestExchangeRates, setExchangeRates} = useContext(CurrencyContext) as CurrencyContextType

  useEffect(() => {
    getAllExchangeRates()
  }, [])
  
  async function getAllExchangeRates(){
    const exchangeRates = await CurrencyAPI.getAllExchangeRates();
    setExchangeRates(exchangeRates)
  }

  return (
    <ContainerList>
      {
        latestExchangeRates.map(exchangeRate => (
          <li key={exchangeRate.key}>
            <p>{exchangeRate.name}</p>
            <small>({exchangeRate.key})</small>
            <h6>R$ {exchangeRate.value}</h6>
          </li>
        ))
      }
    </ContainerList>
  )
}

export default CurrencyList
