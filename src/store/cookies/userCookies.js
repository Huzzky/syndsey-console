import Cookies from 'js-cookie'

const userSetCookies = (account, sublogin, apiKey) => {
  Cookies.set(
    'user',
    {
      user: {
        account: account,
        sublogin: sublogin,
        apiKey: apiKey,
        dateAuth: new Date(),
      },
    },
    { expires: 1, path: '/' },
  )

  console.log(
    Cookies.get('user', { path: 'http://localhost:8080/user-secret' }),
  )
}

const userRemoveCookies = (name, path) => {
  Cookies.remove(name, { path: path })
}

const RequestCookieUserForAuth = () => {
  return Cookies.get('user', { path: 'http://localhost:8080/user-secret' })
}

export { userSetCookies, RequestCookieUserForAuth, userRemoveCookies }
