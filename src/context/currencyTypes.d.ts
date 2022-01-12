type CurrencyContextType = {
  latestExchangeRates: CurrencyValue[]
  currencyNameList: CurrencyName[]
  setNames: (coins: CurrencyName[]) => void
  getByCode: (code: string) => CurrencyName
  setExchangeRates: (coins: CurrencyValue[]) => void
}

interface CurrencyName {
  key: string
  value: string
}

interface CurrencyValue {
  key: string
  value: number
  name: string
}