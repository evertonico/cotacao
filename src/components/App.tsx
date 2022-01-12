import React, { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '../context/currencyContext';
import CurrencyAPI from '../services/currencyApi';
import CurrencyList from './currencyList';
import MainExchangeRate from './mainExchangeRate';
import { Container, Header } from './styles';

function App() {
  const { setNames, getByCode } = useContext(CurrencyContext) as CurrencyContextType

  const [chosenCurrency, setChosenCurrency] = useState<CurrencyValue>()

  useEffect(() => {
    getNames()
  }, [])

  async function getNames(){
    const result = await CurrencyAPI.getCurrencyName()
    setNames(result)
  }

  function handleChosenCurrency(exchangeRate: CurrencyValue){
    setChosenCurrency(exchangeRate)
  }

  return (
    <Container>
     <Header>
       {/* <p>{JSON.stringify(getByCode('BRL'))}</p> */}
       <p></p>
       <MainExchangeRate currencyCode={chosenCurrency}/>
     </Header>

     <CurrencyList getCurrencyCode={handleChosenCurrency}/>
    </Container>
  );
}

export default App;
