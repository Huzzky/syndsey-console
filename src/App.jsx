import './App.css'
import AuthPage from './components/AuthPage/AuthPage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import ApiConsolePage from './components/ApiConsole/ApiConsolePage'
import { RequestCookieUserForAuth } from './store/cookies/userCookies'

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
          <Route path="/api-console" component={ApiConsolePage} />
          <Redirect from="/" to="/auth-user" />
          <Redirect from="*" to="/auth-user" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
