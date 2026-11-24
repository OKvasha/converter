import convert from '../utils/convert'

export default function updateResult(currencyData) {
    const amount = Number(document.querySelector('#inputIn').value)

    const from = document.querySelector('#selectInValue').value
    const to = document.querySelector('#selectOutValue').value

    const inputOutEl = document.querySelector('#inputOut')

    // Проверка валидности
    if (!from || !to || Number.isNaN(amount) || amount < 0) {
        inputOutEl.value = ''
        return
    }

    // Расчёт
    const result = convert(amount, currencyData[from], currencyData[to])

    inputOutEl.value = result.toFixed(4) // в ТЗ 4 знака после запятой
}
