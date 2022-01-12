import React, { useContext, useEffect, useRef, useState } from 'react';
import { CurrencyContext } from '../context/currencyContext';
import CurrencyAPI from '../services/currencyApi';
import CurrencyList from './currencyList';
import MainExchangeRate from './mainExchangeRate';
import { Container, Header, UserAmount } from './styles';

function App() {
  const { setNames } = useContext(CurrencyContext) as CurrencyContextType

  const [chosenCurrency, setChosenCurrency] = useState<CurrencyValue>()
  const [currencyAmount, setCurrencyAmount] = useState<number>(1)

  const inputRef = useRef<HTMLInputElement>(null);
  const [showList, setShowList] = useState<boolean>(false)

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

  function handleCleanCurrency(){
    setChosenCurrency(undefined)
  }

  function handleUserInput(){
    const value: number = Number(inputRef.current?.value)
    if(value > 0){
      console.log(value)
      setCurrencyAmount(value)
    } else {
      setCurrencyAmount(1)
      if(inputRef.current) {
        inputRef.current.value = '1'
      }
    }
  }

  function handleShowList(){
    setShowList(!showList)
  }

  return (
    <Container>
      <Header>
        <UserAmount>
          <p>Valor em reais</p>
          <div>
            <input ref={inputRef} placeholder='0,00' type='number'/>
            <button onClick={handleUserInput}>Converter</button>
          </div>
          <label>
            {showList ? <span>&#8613; Esconder lista de moedas</span> : <span>&#8615; Ver lista de moedas</span>}
            <input type="checkbox" name="show" id="show" onChange={handleShowList}/>
          </label>
        </UserAmount>
        <MainExchangeRate userAmount={currencyAmount} cleanCurrency={handleCleanCurrency} currencyCode={chosenCurrency}/>
      </Header>

      { showList && <CurrencyList getCurrencyCode={handleChosenCurrency}/>}
    </Container>
  );
}

export default App;
