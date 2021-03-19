import Sendsay from 'sendsay-api'

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

  return sendsay.request({ action: 'sys.settings.get', list: ['about.name'] })
}

export { requestToServerForAuth }
