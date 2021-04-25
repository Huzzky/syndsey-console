import Cookies from 'js-cookie'

const writeUserRequestInCookies = (error, requestUser, haveError) => {
  let objUserRequest = {
    userRequest: {
      error: error,
      request: requestUser,
      haveError: haveError,
    },
  }
  let arrRequestUserHistory = []
  let _ = requestToUserRequestInCookies()
  _.length === 0 ? (arrRequestUserHistory = []) : (arrRequestUserHistory = _)

  if (arrRequestUserHistory.length === 0) {
    arrRequestUserHistory.push(objUserRequest)
  } else if (arrRequestUserHistory.length === 15) {
    arrRequestUserHistory.splice(arrRequestUserHistory.length - 1, 1)
    arrRequestUserHistory.unshift(objUserRequest)
  } else {
    arrRequestUserHistory.filter((value, index) => {
      if (
        JSON.stringify(value.userRequest.request[0]) ===
        JSON.stringify(objUserRequest.userRequest.request[0])
      ) {
        arrRequestUserHistory.splice(index, 1)
      }
    })
    arrRequestUserHistory.push(objUserRequest)
  }

  Cookies.set('userRequest', arrRequestUserHistory, { expires: 1, path: '/' })
}

const removeUserRequestInCookies = (name, path) => {
  Cookies.remove(name, { path: path })
}

const requestToUserRequestInCookies = () => {
  try {
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
