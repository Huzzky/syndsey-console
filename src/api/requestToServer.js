import Sendsay from 'sendsay-api'
import {
  RequestCookieUserForAuth,
  userRemoveCookies,
} from '../store/cookies/userCookies'

const requestToServerForAuth = (login, sublogin, password) => {
  let sendsay = new Sendsay({
    auth: {
      // If unknown login, sublogin and password
      // login: 'x_1616145609494603',
      // sublogin: 'huzky',
      // password: '$?0-zB=2id',
      login: login,
      sublogin: sublogin,
      password: password,
    },
  })

  return sendsay
    .request({
      action: 'sys.user.apikey.create',
    })
    .then((result) => {
      return [login, sublogin, result.apikey]
    })
    .catch((_) => {
      return ['Error connection']
    })
}

const sendToServerRequest = (userRequest) => {
  let user = JSON.parse(RequestCookieUserForAuth())
  let sendsay = new Sendsay({ apiKey: user.user.apiKey })
  console.log(userRequest[0])
  return sendsay.request(userRequest[0]).then(
    (result) => {
      console.log(result)
      return [result]
    },
    (e) => {
      return [{ error: e }]
    },
  )
}

const logoutUserAndDeleteAPIKey = () => {
  let user = JSON.parse(RequestCookieUserForAuth())
  let sendsay = new Sendsay({ apiKey: user.user.apiKey })
  return sendsay
    .request({
      action: 'sys.user.apikey.delete',
    })
    .then(
      (result) => {
        userRemoveCookies('user', 'http://localhost:8080/user-secret')
        return ['Complete delete']
      },
      (e) => {
        return ['Error connection']
      },
    )
}

export {
  requestToServerForAuth,
  sendToServerRequest,
  logoutUserAndDeleteAPIKey,
}
