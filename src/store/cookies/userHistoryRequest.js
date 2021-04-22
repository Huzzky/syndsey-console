import Cookies from 'js-cookie'

const writeUserRequestInCookies = (error, requestUser, haveError) => {
  let arrRequestUserHistory = []

  let a = requestToUserRequestInCookies()
  a === [] ? (arrRequestUserHistory = []) : (arrRequestUserHistory = a)

  //   JSON.parse(JSON.stringify(['foo','bar']))
  //   ------->    ["foo", "bar"]
  arrRequestUserHistory.push({
    userRequest: { error: error, request: requestUser, haveError: haveError },
  })

  Cookies.set('userRequest', arrRequestUserHistory, { expires: 1, path: '/' })
}

const removeUserRequestInCookies = (name, path) => {
  Cookies.remove(name, { path: path })
}

const requestToUserRequestInCookies = () => {
  try {
    console.log(
      JSON.parse(Cookies.get('userRequest', { path: '/api-console' })),
    )
    return JSON.parse(Cookies.get('userRequest', { path: '/api-console' }))
  } catch {
    return []
  }
}

export {
  writeUserRequestInCookies,
  removeUserRequestInCookies,
  requestToUserRequestInCookies,
}
