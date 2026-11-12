import { getEl, getSvgEl } from './elements'

export default function renderTable(data, tableBody) {
    data.forEach((row) => {
        const trEl = getEl('tr', 'table__tr')
        const tdIconEl = getEl('td', 'table__td')
        const tdUnitEl = getEl('td', 'table__td', row.unit)
        const tdNameEl = getEl('td', 'table__td', row.name)
        const tdRateEl = getEl('td', 'table__td', row.rate)
        const spanEl = getEl('span', 'table__flag')
        const svgEl = getSvgEl('table__flag-icon', 27, 20, `/__spritemap#sprite-${row.code.toUpperCase()}`)

        spanEl.append(svgEl, row.code)
        tdIconEl.append(spanEl)
        trEl.append(tdIconEl, tdUnitEl, tdNameEl, tdRateEl)
        tableBody.append(trEl)
    })
}
