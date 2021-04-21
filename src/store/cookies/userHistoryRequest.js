import Cookies from 'js-cookie'

const writeUserRequestInCookies = (error, requestUser, haveError) => {
  let arrRequestUserHistory = []
  // {
  //   userRequest: { error: {}, request: { action: 'ping' }, haveError: true },
  // },
  let a = requestToUserRequestInCookies()
  a === undefined ? (arrRequestUserHistory = []) : (arrRequestUserHistory = a)
  console.log(JSON.parse(a)[0].userRequest.request)

  //   JSON.parse(JSON.stringify(['foo','bar']))
  //   ------->    ["foo", "bar"]
  // arrRequestUserHistory += `{userRequest: {error: ${JSON.stringify(
  //   error,
  // )}, request: ${JSON.stringify(requestUser[0])},haveError: ${haveError}}}`

  Cookies.set('userRequest', arrRequestUserHistory, { expires: 1, path: '/' })

  console.log(Cookies.get('userRequest', { path: '/api-console' }))
}

const removeUserRequestInCookies = (name, path) => {
  Cookies.remove(name, { path: path })
}

const requestToUserRequestInCookies = () => {
  return Cookies.get('userRequest', { path: '/api-console' })
}

export {
  writeUserRequestInCookies,
  removeUserRequestInCookies,
  requestToUserRequestInCookies,
}
