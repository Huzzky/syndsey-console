import './App.css'
import AuthPage from './components/AuthPage/AuthPage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* TODO different when user non-auth and post-auth */}
          <Route path="/auth-user" component={AuthPage} />
          <Redirect from="/" to="/auth-user" />
          <Redirect from="*" to="/auth-user" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
