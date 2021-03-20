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
    if (typeInput === formInput.login) {
      loginValidate(value, setValueCheckFunc, setValueNullOrHaveTextFunc)
    } else if (typeInput === formInput.password) {
    } else if (typeInput === formInput.sublogin) {
    }
  }
}

const reTestLogin = (login) => {
  const re = /[^0-9a-z@._-]/gi
  return re.test(login)
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

const loginValidate = (
  value,
  setValueCheckFunc,
  setValueNullOrHaveTextFunc,
) => {
  if (!reTestLogin(value)) {
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
