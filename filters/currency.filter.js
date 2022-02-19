export default function currencyFilter(value, currency = 'UAH') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(value)
}
