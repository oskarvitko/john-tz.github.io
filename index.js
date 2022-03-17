document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('data')) || []
    data.forEach(item => {
        if (item.value) {
            const itemNode = document.getElementById(item.id)
            itemNode.checked = true
            itemNode.closest('.form__group').classList.add('completed')
        }
    })


    const form = document.getElementById('form')
    form.addEventListener('change', (e) => changeHandler(e, form))
})

const changeHandler = (event, form) => {
    const parent = event.target.closest('.form__group')
    if (event.target.checked) {
        parent.classList.add('completed')
    } else {
        parent.classList.remove('completed')
    }

    const data = Array.prototype.map.call(
        form.querySelectorAll('input'),
        (input) => ({
            id: input.id,
            value: input.checked
        }))
    localStorage.setItem('data', JSON.stringify(data))
}