import './style.scss'
import fetchData from './js/services/fetchData'
import prepareData from './js/utils/prepareData'
import renderTable from './js/components/renderTable'
import renderSelect from './js/components/renderSelect'
import initEvents from './js/handlers/initEvents'

async function init() {
    try {
        const data = await fetchData()
        const dataPrep = prepareData(data)

        const currencyData = dataPrep[0]
        console.log(dataPrep[0])

        //console.log(optionsArr)

        // заполняем левый селект
        const selectInEl = document.querySelector('#selectIn')
        renderSelect(currencyData, selectInEl)
        selectInEl.value = 'RUB'

        // заполняем правый селект
        const selectOutEl = document.querySelector('#selectOut')
        renderSelect(currencyData, selectOutEl)
        selectOutEl.value = 'USD'

        // дата выполнения запроса
        const dateEl = document.querySelector('.currency__date')
        dateEl.textContent = dataPrep[1]

        // список валют
        const tableBodyEl = document.querySelector('#tableBody')
        renderTable(currencyData, tableBodyEl)

        const inputInEl = document.querySelector('#inputIn')
        const inputOutEl = document.querySelector('#inputOut')

        initEvents(currencyData, { selectInEl, selectOutEl, inputInEl, inputOutEl })
    } catch (e) {
        console.error(e)
    }
}

init()
