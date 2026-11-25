export default function refreshResult() {
    const selectInToggleEl = document.querySelector('#selectInToggle')
    const selectOutToggleEl = document.querySelector('#selectOutToggle')

    const selectInValueEl = document.querySelector('#selectInValue')
    const selectOutValueEl = document.querySelector('#selectOutValue')

    // Получаем спаны — они могут быть null, если выбор ещё не сделан
    const nameFrom = selectInToggleEl.querySelector('.form__select-toggle-name')
    const codeFrom = selectInToggleEl.querySelector('.form__select-toggle-code')
    const nameTo = selectOutToggleEl.querySelector('.form__select-toggle-name')
    const codeTo = selectOutToggleEl.querySelector('.form__select-toggle-code')

    // Меняем текст только если оба селекта уже имеют выбранные значения (есть спаны)
    if (nameFrom && nameTo && codeFrom && codeTo) {
        const nameFromText = nameFrom.textContent
        const codeFromText = codeFrom.textContent

        nameFrom.textContent = nameTo.textContent
        codeFrom.textContent = codeTo.textContent

        nameTo.textContent = nameFromText
        codeTo.textContent = codeFromText

        selectInToggleEl.setAttribute('aria-label', `${nameTo.textContent} ${codeTo.textContent}`)
        selectOutToggleEl.setAttribute('aria-label', `${nameFromText} ${codeFromText}`)
    }

    // Меняем значения скрытых инпутов
    const from = selectInValueEl.value
    const to = selectOutValueEl.value

    selectInValueEl.value = to
    selectOutValueEl.value = from

    markSelected(document.querySelector('#selectIn'), selectInValueEl.value)
    markSelected(document.querySelector('#selectOut'), selectOutValueEl.value)
}

function markSelected(menu, value) {
    if (!menu) return
    menu.querySelectorAll('.form__select-item').forEach((item) => {
        item.classList.toggle('is-selected', item.dataset.value === value)
    })
}
