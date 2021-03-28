import Cookies from 'universal-cookie'

const userSetCookies = (account, sublogin) => {
  const cookies = new Cookies()

  cookies.set(
    'user',
    {
      user: {
        email: account,
        sublogin: sublogin,
        dateAuth: new Date(),
      },
    },
    { path: '/' },
  )
}

const userRemoveCookies = (name, path) => {
  const cookies = new Cookies()

  cookies.remove(name, { path: path })
}

const RequestCookieUserForAuth = () => {
  const cookies = new Cookies()

  return cookies.get('user', { path: '/' })
}

export { userSetCookies, RequestCookieUserForAuth, userRemoveCookies }
