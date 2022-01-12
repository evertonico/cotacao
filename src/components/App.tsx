import React, { useContext, useEffect } from 'react';
import { CurrencyContext } from '../context/currencyContext';
import CurrencyAPI, { CurrencyName } from '../services/currencyApi';
import MainQuotation from './mainCotation';
import { Container, Header } from './styles';

function App() {
  const { currencies, setNames, getByCode } = useContext(CurrencyContext) as CurrencyContextType

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
       <p>{JSON.stringify(getByCode('BRL'))}</p>
       <MainQuotation />
     </Header>
    </Container>
  );
}

export default App;
