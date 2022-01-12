const getCurrencyMask = (number: number) => {
  return number.toString().replace('.', ',')
}

const SharedFunctions = {
  getCurrencyMask
}

export default SharedFunctions