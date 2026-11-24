export default function refreshResult() {
    const selectInToggleEl = document.querySelector('#selectInToggle')
    const selectOutToggleEl = document.querySelector('#selectOutToggle')

    const nameFrom = selectInToggleEl.textContent
    const nameTo = selectOutToggleEl.textContent

    selectInToggleEl.textContent = nameTo
    selectOutToggleEl.textContent = nameFrom

    selectInToggleEl.setAttribute('aria-label', nameTo)
    selectOutToggleEl.setAttribute('aria-label', nameFrom)

    const selectInValueEl = document.querySelector('#selectInValue')
    const selectOutValueEl = document.querySelector('#selectOutValue')

    const from = selectInValueEl.value
    const to = selectOutValueEl.value

    selectInValueEl.value = to
    selectOutValueEl.value = from

    markSelected(document.querySelector('#selectIn'), selectInValueEl.value)
    markSelected(document.querySelector('#selectOut'), selectOutValueEl.value)
}

function markSelected(menu, value) {
    menu.querySelectorAll('.form__select-item').forEach((item) => {
        item.classList.toggle('is-selected', item.dataset.value === value)
    })
}
