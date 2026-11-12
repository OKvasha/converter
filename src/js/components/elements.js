// Получение элемента
function getEl(el, classEl, text) {
    const domEl = document.createElement(el)
    if (text) {
        domEl.textContent = text
    }
    if (classEl) {
        domEl.className = classEl
    }

    return domEl
}

// Получение элемента текстового поля
function getInputEl(type, name, classEl, placeholder, value, required = true) {
    const inputEl = getEl('input', 'form__field')
    inputEl.type = type
    inputEl.name = name
    inputEl.className = classEl
    inputEl.id = name
    inputEl.value = value
    inputEl.required = required
    if (placeholder) {
        inputEl.placeholder = placeholder
    }

    return inputEl
}

function getLink(classLink, href, text) {
    const linkEl = getEl('a', classLink, text)
    linkEl.setAttribute('href', href)

    return linkEl
}

function getImgEl(classEl, imgUrl, width, height, alt) {
    const imgEl = getEl('img', classEl)
    imgEl.setAttribute('width', width)
    imgEl.setAttribute('height', height)
    imgEl.setAttribute('src', imgUrl)
    imgEl.setAttribute('alt', alt)

    return imgEl
}

function getSvgEl(classEl, width, height, iconId) {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svgEl.setAttribute('class', classEl)
    svgEl.setAttribute('width', width)
    svgEl.setAttribute('height', height)
    svgEl.setAttribute('aria-hidden', 'true')

    const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    useEl.setAttribute('href', iconId)
    svgEl.appendChild(useEl)

    return svgEl
}

// Получение элемента кнопки
function getButtonEl(type, classBtn, text, ariaLabel) {
    const buttonEl = getEl('button', classBtn, text)
    buttonEl.type = type
    buttonEl.ariaLabel = ariaLabel

    return buttonEl
}

export { getEl, getInputEl, getButtonEl, getImgEl, getSvgEl, getLink }
