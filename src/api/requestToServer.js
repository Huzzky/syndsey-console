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

const sendToServerRequest = () => {
  let sendsay = new Sendsay()

  return sendsay.login({}).then(() => {
    sendsay
      .request({
        action: 'pong',
      })
      .then(
        (result) => {
          return [result.account, result.sublogin]
        },
        (_) => {
          return ['Error connection']
        },
      )
  })
}

const logoutUserAndDeleteAPIKey = () => {
  let user = JSON.parse(RequestCookieUserForAuth())
  console.log(user.user.apiKey)
  let sendsay = new Sendsay({ apiKey: user.user.apiKey })
  return sendsay
    .request({
      action: 'sys.user.apikey.delete',
    })
    .then(
      (result) => {
        userRemoveCookies('user', '/')
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
