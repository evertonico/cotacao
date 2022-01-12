import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../../context/currencyContext'
import CurrencyAPI from '../../services/currencyApi'
import { Container, Row } from './styles'
import NumberFormat from 'react-number-format';

interface Props {
  currencyCode?: CurrencyValue
}

const MainExchangeRate = ({currencyCode}: Props) => {
  const [chosenCurrency, setCurrency] = useState<MainExchangeRateType>()
  const {getByCode} = useContext(CurrencyContext) as CurrencyContextType

  const [defaultCurrencies, setDefaultCurrencies] = useState<MainExchangeRateType[]>([])

  useEffect(() => {
    getDefaultCurrencies()
  }, [])

  useEffect(() => {
    if(currencyCode) getCurrencyInfo(currencyCode.key)
  }, [currencyCode])

  async function getDefaultCurrencies(){
    const currencies: MainExchangeRateType[] = await CurrencyAPI.getUsdAndEur()
    if(currencies) setDefaultCurrencies(currencies)
  }

  async function getCurrencyInfo(code: string){
    const currency = await CurrencyAPI.getExchangeRateByCode(code)
    if(currency) setCurrency(currency[0])
    
    if(currency.name && currency.name === 'Error' && currencyCode) {
      const info: MainExchangeRateType = {
        code: currencyCode?.key,
        name: currencyCode.name,
        bid: currencyCode.value
      }
      setCurrency(info)
    }
  }

  return (
    <Container>
      {
        chosenCurrency ? 
        (
          <>
            <Row key={chosenCurrency.code}>
              <aside>
              
              </aside>
              <main>
                <h2>{getByCode(chosenCurrency.code) ? getByCode(chosenCurrency.code).value : 'Loading'}</h2>
                <h3>
                  <NumberFormat
                    displayType={'text'}
                    value={chosenCurrency.bid}
                    prefix='R$ '
                    decimalScale={4}
                    fixedDecimalScale={true}
                  />
                </h3>
                <small>{chosenCurrency.name}</small>
              </main>
            </Row>
          </>
        ) : 
        (
          <>
            { 
              defaultCurrencies.map(currency => (
                <Row key={currency.code}>
                  <aside>

                  </aside>
                  <main>
                    <h2>{JSON.stringify(currency.bid)}{getByCode(currency.code) ? getByCode(currency.code).value : 'Loading'}</h2>
                    <h3>
                      <NumberFormat
                        displayType={'text'}
                        value={currency.bid}
                        prefix='R$ '
                        decimalScale={4}
                        fixedDecimalScale={true}
                      />
                    </h3>
                    <small>{currency.name}</small>
                  </main>
                </Row>)
              )
            }
          </>
        )
      }
    </Container>
  )
}

export default MainExchangeRate
