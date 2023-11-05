const formatCurrency = (value: number) =>
    value.toLocaleString('en-En', { style: 'currency', currency: 'USD' })

export default formatCurrency
