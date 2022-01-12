import axios from "axios"

export interface CurrencyName {
  key: string
  value: string
}

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

function getQuotationByCode(code: string){
  return axios.get(`http://economia.awesomeapi.com.br/json/last/${code}-BRL`)
    .then(response => {
      return Object.values(response.data)
    })
    .catch(error => error)
}

const CurrencyAPI = {
  getCurrencyName,
  getUsdAndEur,
  getQuotationByCode
}

export default CurrencyAPI