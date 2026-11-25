import { getEl } from './elements'

function close(dropdown, menu, toggle) {
    dropdown.classList.remove('is-open')
    menu.setAttribute('aria-hidden', 'true')
    toggle.setAttribute('aria-expanded', 'false')
}

export default function dropdownSelect(dropdown) {
    const toggle = dropdown.querySelector('button') // первая кнопка внутри
    const menu = dropdown.querySelector('ul') // первый ul
    const hidden = dropdown.querySelector('input') // первый input

    toggle.addEventListener('click', () => {
        const isOpen = dropdown.classList.contains('is-open')
        dropdown.classList.toggle('is-open', !isOpen)
        menu.setAttribute('aria-hidden', String(isOpen))
        toggle.setAttribute('aria-expanded', String(!isOpen))
    })

    menu.querySelectorAll('li').forEach((item) => {
        item.addEventListener('click', () => {
            const name = item.querySelector('.form__select-name').textContent.trim()
            const code = item.querySelector('.form__select-code').textContent.trim()

            const nameEl = getEl('span', 'form__select-toggle-name', `${name} `)
            const codeEl = getEl('span', 'form__select-toggle-code', `${code}`)

            toggle.replaceChildren(nameEl, codeEl)
            hidden.value = item.dataset.value

            menu.querySelector('.is-selected')?.classList.remove('is-selected')
            item.classList.add('is-selected')
            close(dropdown, menu, toggle)

            hidden.dispatchEvent(new Event('change'))
        })
    })

    // закрытие по клику мимо и по Esc
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) close(dropdown, menu, toggle)
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close(dropdown, menu, toggle)
    })
}
