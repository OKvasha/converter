export default function renderSelect(data, selectEl) {
    // Превращаем объект в массив
    const items = Object.values(data)

    // Сортируем по полю name (на русском)
    items.sort((a, b) => a.name.localeCompare(b.name, 'ru'))

    // Добавляем в селект
    items.forEach((item) => {
        selectEl.add(new Option(`${item.name} ${item.code}`, item.code))
    })
}
