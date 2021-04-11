import Cookies from 'universal-cookie'

const userSetCookies = (account, sublogin) => {
  const cookies = new Cookies()

  cookies.set(
    'user',
    {
      user: {
        account: account,
        sublogin: sublogin,
        dateAuth: new Date(),
      },
    },
    { path: '/' },
  )

  console.log(cookies.get('user', { path: '/' }))
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
