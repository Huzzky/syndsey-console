import { formInput, formTypeValidate } from '../const'

const validateInputForm = (
  value,
  setValueCheckFunc,
  setValueNullOrHaveTextFunc,
  typeValidate,
  typeInput,
) => {
  let flag = value === '' ? true : false
  if (typeValidate === formTypeValidate.blur && flag) {
    blurCheck(value, setValueCheckFunc)
  } else if (typeValidate === formTypeValidate.validate) {
    valueValidate(
      value,
      setValueCheckFunc,
      setValueNullOrHaveTextFunc,
      typeInput,
    )
  }

  return true
}

const reTestValue = (value, typeInput) => {
  if (typeInput === formInput.login) {
    const re = /[^0-9a-z@._-]/gi
    return re.test(value)
  } else if (typeInput === formInput.password) {
    const re = /[^0-9a-z@~`!#$№;:(){}"%^&*?=+-_. -]/gi
    return re.test(value)
  }
}

const blurCheck = (value, setValueCheckFunc) => {
  if (value === '') {
    setValueCheckFunc(false)
    return false
  } else {
    setValueCheckFunc(true)
    return true
  }
}

const valueValidate = (
  value,
  setValueCheckFunc,
  setValueNullOrHaveTextFunc,
  typeInput,
) => {
  if (!reTestValue(value, typeInput)) {
    setValueCheckFunc(true)
    setValueNullOrHaveTextFunc(value)
    return true
  } else {
    setValueCheckFunc(false)
    setValueNullOrHaveTextFunc('')
    return false
  }
}

export { validateInputForm }
