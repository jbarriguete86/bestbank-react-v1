function setUsdCurrency(objEl){
    const currency = parseFloat(objEl).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })

      return currency
    }

    export {setUsdCurrency}