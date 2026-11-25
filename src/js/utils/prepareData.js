export default function prepareData(raw) {
    const dateStr = raw.Date
    const d = new Date(dateStr)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0') // getMonth() с 0
    const year = d.getFullYear()
    const dateFormatted = `${day}.${month}.${year}`

    const rows = Object.values(raw.Valute ?? {}).reduce((result, item) => {
        result[item.CharCode] = {
            code: item.CharCode,
            name: item.Name,
            unit: item.Nominal ?? 1,
            rate: Number(item.Value),
        }
        return result
    }, {})

    // Рубль — базовая валюта, его в ответе ЦБ нет, поэтому достраиваем сами
    rows.RUB = {
        code: 'RUR',
        name: 'Российский рубль',
        unit: 1,
        rate: 1,
    }

    return [rows, dateFormatted]
}
