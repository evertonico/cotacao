import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../../context/currencyContext'
import CurrencyAPI from '../../services/currencyApi'
import { Container, Row } from './styles'

interface Props {
  currencyCode?: string
}

const MainQuotation = ({currencyCode}: Props) => {
  const [chosenCurrency, setCurrency] = useState<MainQuotationType>()
  const {getByCode} = useContext(CurrencyContext) as CurrencyContextType

  const [defaultCurrencies, setDefaultCurrencies] = useState<MainQuotationType[]>([])

  useEffect(() => {
    getDefaultCurrencies()
  }, [])

  useEffect(() => {
    if(currencyCode) getCurrencyInfo(currencyCode)
  }, [currencyCode])

  async function getDefaultCurrencies(){
    const currencies = await CurrencyAPI.getUsdAndEur()
    setDefaultCurrencies(currencies)
  }

  async function getCurrencyInfo(code: string){
    const currency = await CurrencyAPI.getQuotationByCode(code)
    if(currency) setCurrency(currency)
  }

  return (
    <Container>
      {
        chosenCurrency ? 
        (
          null
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
                    <h3>R$ {currency.bid}</h3>
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

export default MainQuotation
