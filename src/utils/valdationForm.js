const validateLogin = (login, setLoginCheck, setLoginNullOrHaveText, type) => {
  if (type === 'blur') {
    login === '' ? setLoginCheck(false) : setLoginCheck(true)
  } else if (type === 'validate') {
    if (!reTestLogin(login)) {
      setLoginCheck(true)
      setLoginNullOrHaveText(login)
    } else {
      setLoginCheck(false)
      setLoginNullOrHaveText('')
    }
  }
}

const reTestLogin = (login) => {
  const re = /[^0-9a-z@._-]/gi
  return re.test(login)
}

export { validateLogin }
