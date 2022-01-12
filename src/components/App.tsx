import React, { useContext, useEffect } from 'react';
import { CurrencyContext } from '../context/currencyContext';
import CurrencyAPI from '../services/currencyApi';
import CurrencyList from './currencyList';
import MainExchangeRate from './mainExchangeRate';
import { Container, Header } from './styles';

function App() {
  const { setNames, getByCode } = useContext(CurrencyContext) as CurrencyContextType

  useEffect(() => {
    getNames()
  }, [])

  async function getNames(){
    const result = await CurrencyAPI.getCurrencyName()
    setNames(result)
  }

  return (
    <Container>
     <Header>
       {/* <p>{JSON.stringify(getByCode('BRL'))}</p> */}
       <p></p>
       <MainExchangeRate />
     </Header>

     <CurrencyList />
    </Container>
  );
}

export default App;
