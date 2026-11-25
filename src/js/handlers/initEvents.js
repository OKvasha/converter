import updateResult from './updateResult.js'
import refreshResult from './refreshResult.js'
import dropdownSelect from '../components/dropdown'

export default function initEvents(currencyData) {
    const handler = () => updateResult(currencyData)

    const inputInEl = document.querySelector('#inputIn')
    const selectInEl = document.querySelector('#selectInValue')
    const selectOutEl = document.querySelector('#selectOutValue')

    const elements = [inputInEl, selectInEl, selectOutEl]
    const events = ['change']

    for (const el of elements) {
        for (const event of events) {
            el.addEventListener(event, handler)
        }
    }

    document.querySelector('#refreshBtn').addEventListener('click', (e) => {
        e.preventDefault()
        refreshResult()
        updateResult(currencyData)
    })

    dropdownSelect(document.querySelector('#selectIn'))
    dropdownSelect(document.querySelector('#selectOut'))
}
