const validateLogin = (login, setLoginCheck, setLoginNullOrHaveText, type) => {
  let flag = login === '' ? true : false
  if (type === 'blur' && flag) {
    if (login === '') {
      setLoginCheck(false)
      return false
    } else {
      setLoginCheck(true)
      return true
    }
  } else if (type === 'validate') {
    if (!reTestLogin(login)) {
      setLoginCheck(true)
      setLoginNullOrHaveText(login)
      return true
    } else {
      setLoginCheck(false)
      setLoginNullOrHaveText('')
      return false
    }
  }
}

const reTestLogin = (login) => {
  const re = /[^0-9a-z@._-]/gi
  return re.test(login)
}

export { validateLogin }
