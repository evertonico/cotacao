type CurrencyContextType = {
  currencies: CurrencyName[]
  setNames: (coins: CurrencyName[]) => void
  getByCode: (code: string) => CurrencyName
}