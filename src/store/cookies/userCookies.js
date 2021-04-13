import Cookies from 'js-cookie'

const userSetCookies = (account, sublogin) => {
  Cookies.set(
    'user',
    {
      user: {
        account: account,
        sublogin: sublogin,
        dateAuth: new Date(),
      },
    },
    { expires: 1, path: '/' },
  )

  console.log(Cookies.get('user', { path: '/' }))
}

const userRemoveCookies = (name, path) => {
  Cookies.remove(name, { path: path })
}

const RequestCookieUserForAuth = () => {
  return Cookies.get('user', { path: '/' })
}

export { userSetCookies, RequestCookieUserForAuth, userRemoveCookies }
