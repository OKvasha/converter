import convert from '../utils/convert'

export default function updateResult(currencyData, selectInEl, selectOutEl, inputInEl, inputOutEl) {
    const amount = Number(inputInEl.value)
    const from = selectInEl.value
    const to = selectOutEl.value

    // Проверка валидности
    if (!from || !to || Number.isNaN(amount) || amount < 0) {
        inputOutEl.value = ''
        return
    }

    // Расчёт
    const result = convert(amount, currencyData[from], currencyData[to])

    inputOutEl.value = result.toFixed(4) // в ТЗ 4 знака после запятой
}
