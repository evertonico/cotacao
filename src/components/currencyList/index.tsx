import React, { useContext, useEffect } from 'react'
import { CurrencyContext } from '../../context/currencyContext'
import CurrencyAPI from '../../services/currencyApi'
import { ContainerList } from './styles'
import NumberFormat from 'react-number-format';
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

  function handleClick(exchangeRate: CurrencyValue){
    if(getCurrencyCode) getCurrencyCode(exchangeRate)
  }

  return (
    <ContainerList>
      {
        latestExchangeRates.map(exchangeRate => (
          <li key={exchangeRate.key} onClick={() => handleClick(exchangeRate)}>
            <p>{exchangeRate.name}</p>
            <small>({exchangeRate.key})</small>
            <h6>
              <NumberFormat
                  displayType={'text'}
                  value={exchangeRate.value}
                  prefix='R$ '
                  decimalScale={4}
                  fixedDecimalScale={true}
                />
              </h6>
          </li>
        ))
      }
    </ContainerList>
  )
}

export default CurrencyList
