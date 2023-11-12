document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')

  if (form.reportValidity()) {
    form.onsubmit()
  } else {
    form.reset()
  }
}
//До кнопки  +-10
document
  .querySelectorAll('.form__button--add')
  .forEach((element) => {
    element.onclick = () => {
      if (element.getAttribute('operator') === '+') {
        return age.stepUp(
          Number(element.getAttribute('value')),
        )
      }

      if (element.getAttribute('operator') === '-') {
        return age.stepDown(
          Number(element.getAttribute('value')),
        )
      }
    }
  })

//До кнопки  Save
document.querySelector('.form__button--save').onclick =
  () => {
    const value = document.getElementById('username').value
    if (value.length === 0) alert('Даних немає')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Дані збережено'))
  }
