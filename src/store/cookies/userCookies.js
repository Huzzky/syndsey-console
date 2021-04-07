import Cookies from 'universal-cookie'
import Sendsay from 'sendsay-api'

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
  const sendsay = new Sendsay()
  const cookies = new Cookies()

  sendsay.setSessionFromCookie('user1')

  console.log(cookies)
  return cookies.get('user', { path: '/' })
}

export { userSetCookies, RequestCookieUserForAuth, userRemoveCookies }
