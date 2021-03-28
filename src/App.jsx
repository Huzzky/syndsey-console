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
// import ApiConsolePage from './components/ApiConsole/ApiConsolePage'
const ApiConsolePage = React.lazy(() =>
  import('./components/ApiConsole/ApiConsolePage'),
)

function App() {
  return (
    <div className="App">
      <Router>
        {RequestCookieUserForAuth() === undefined ? (
          <Redirect to="/auth-user" />
        ) : (
          <Redirect to="/api-console" />
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

export default App
