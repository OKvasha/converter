import updateResult from './updateResult.js'

export default function initEvents(currencyData, { selectInEl, selectOutEl, inputInEl, inputOutEl }) {
    const handler = () => updateResult(currencyData, selectInEl, selectOutEl, inputInEl, inputOutEl)

    const elements = [inputInEl, selectInEl, selectOutEl]
    const events = ['input', 'change']

    for (const el of elements) {
        for (const event of events) {
            el.addEventListener(event, handler)
        }
    }
}
