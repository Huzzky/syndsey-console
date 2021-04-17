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

  console.log(Cookies.get('user', { path: '/' }))
}

const userRemoveCookies = (name, path) => {
  console.log('fasdf')
  Cookies.remove(name, { path: path })
}

const RequestCookieUserForAuth = () => {
  return Cookies.get('user', { path: '/' })
}

export { userSetCookies, RequestCookieUserForAuth, userRemoveCookies }
