import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../../context/currencyContext'
import CurrencyAPI from '../../services/currencyApi'
import { Button, Container, Row } from './styles'
import NumberFormat from 'react-number-format';
import SharedFunctions from '../../utils/shared';

interface Props {
  currencyCode?: CurrencyValue
  cleanCurrency: Function
  userAmount: number
}

const MainExchangeRate = ({currencyCode, cleanCurrency, userAmount}: Props) => {
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

  function removeChosenCurrency(){
    setCurrency(undefined)
    cleanCurrency()
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
                    value={SharedFunctions.getCurrencyMask(userAmount * chosenCurrency.bid)}
                    prefix='R$ '
                    decimalScale={4}
                    thousandSeparator='.'
                    decimalSeparator=','
                    fixedDecimalScale={true}
                  />
                </h3>
                <small>{chosenCurrency.name}</small>
              </main>
            </Row>
            <Button onClick={removeChosenCurrency}>Voltar</Button>
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
                    <h2>{getByCode(currency.code) ? getByCode(currency.code).value : 'Loading'}</h2>
                    <h3>
                    <NumberFormat
                        displayType={'text'}
                        value={SharedFunctions.getCurrencyMask(userAmount * currency.bid)}
                        prefix='R$ '
                        decimalScale={4}
                        thousandSeparator='.'
                        decimalSeparator=','
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
