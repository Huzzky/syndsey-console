import Cookies from 'universal-cookie'

const userSetCookies = (login) => {
  const cookies = new Cookies()

  cookies.set(
    'user',
    {
      user: {
        email: login,
        dateAuth: new Date(),
      },
    },
    { path: '/' },
  )
}

const RequestCookieUserForAuth = () => {
  const cookies = new Cookies()

  return cookies.get('user', { path: '/' })
}

export { userSetCookies, RequestCookieUserForAuth }
