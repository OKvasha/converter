import { getEl } from './elements'

export default function renderSelect(data, selectEl) {
    // Превращаем объект в массив
    const items = Object.values(data)

    // Сортируем по полю name (на русском)
    items.sort((a, b) => a.name.localeCompare(b.name, 'ru'))

    const menu = selectEl.querySelector('ul') // первый ul

    // Добавляем в селект
    items.forEach((item) => {
        const menuItem = getEl('li', 'form__select-item')
        menuItem.setAttribute('data-value', `${item.code}`)
        menuItem.setAttribute('role', 'option')

        menuItem.append(
            getEl('span', 'form__select-name', `${item.name}`),
            getEl('span', 'form__select-code', `${item.code}`)
        )
        menu.append(menuItem)
        //selectEl.add(new Option(`${item.name} ${item.code}`, item.code))
    })
}
