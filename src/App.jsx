import './App.css'
import AuthPage from './components/AuthPage/AuthPage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import React, { Suspense } from 'react'
import { RequestCookieUserForAuth } from './store/cookies/userCookies'
import { connect } from 'react-redux'
import { updateAuthUserWithCookies } from './store/actions/updateAuthUserWithCookies'
const ApiConsolePage = React.lazy(() =>
  import('./components/ApiConsole/ApiConsolePage'),
)

function App({ authUser, updateAuthUserWithCookies }) {
  // TODO подчистить компоненты и файлы
  return (
    <div className="App">
      <Router>
        {RequestCookieUserForAuth() === undefined ? (
          <Redirect to="/auth-user" />
        ) : (
          /* TODO Сделать функцию на проверку актуальности аккаунта *(если
            изменился пароль, то выход из аккаунта и удаление куки) */
          <div>
            {authUser ? '' : updateAuthUserWithCookies()}
            <Redirect to="/api-console" />
          </div>
        )}
        <Switch>
          <Route path="/auth-user" component={AuthPage} />
          <Suspense fallback={<div>Загрузка...</div>}>
            <Route path="/api-console" component={ApiConsolePage} />
          </Suspense>
          <Redirect from="/" to="/auth-user" />
          <Redirect from="*" to="/auth-user" />
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = ({ userActionsReducer }) => ({
  authUser: userActionsReducer.userAuthSucces,
})

const mapDispatchToProps = (dispatch) => ({
  updateAuthUserWithCookies: () => dispatch(updateAuthUserWithCookies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
