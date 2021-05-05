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
  } else if (arrRequestUserHistory.length === 20) {
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
      return arrRequestUserHistory
    })
    arrRequestUserHistory.push(objUserRequest)
  }

  Cookies.set('userRequest', arrRequestUserHistory, { expires: 1, path: '/' })
}

const removeUserRequestInCookies = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Cookies.remove('userRequest', { path: '/api-console' })
      resolve('deleted')
    }, 1)
  })
  return promise
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
