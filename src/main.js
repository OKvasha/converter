import './style.scss'
import fetchData from './js/services/fetchData'
import prepareData from './js/utils/prepareData'
import renderTable from './js/components/renderTable'

async function init() {
    try {
        const data = await fetchData()

        const dateEl = document.querySelector('.currency__date')
        dateEl.textContent = prepareData(data)[1]

        const tableBodyEl = document.querySelector('#tableBody')
        renderTable(prepareData(data)[0], tableBodyEl)
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

init()
