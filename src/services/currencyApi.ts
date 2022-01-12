import axios from "axios"

function getCurrencyName(){
  return axios.get('https://economia.awesomeapi.com.br/available/uniq')
    .then(response => {
      return Object.entries(response.data).map(([cod, name]) => { return {key: cod, value: name}})
    })
    .catch(error => error)
}

function getUsdAndEur(){
  return axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
    .then(response => {
      return Object.values(response.data)
    })
    .catch(error => error)
}

function getExchangeRateByCode(code: string){
  return axios.get(`http://economia.awesomeapi.com.br/json/last/${code}-BRL`)
    .then(response => {
      return Object.values(response.data)
    })
    .catch(error => error)
}

function getAllExchangeRates(){
  return axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=3d6e2e80-7287-11ec-b37c-3dd23c22bc50&base_currency=BRL')
    .then(response => {
      return Object.entries(response.data.data).map(([cod, value]) => { return {key: cod, value: (1/Number(value)).toFixed(4)}})
    })
    .catch(error => error)
}

const CurrencyAPI = {
  getCurrencyName,
  getUsdAndEur,
  getExchangeRateByCode,
  getAllExchangeRates
}

export default CurrencyAPI