import FormAuthPage from './FornAuthPage/FormAuthPage'
import '../../assets/_authPage.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const AuthPage = ({ userAuthSucces }) => {
  return !userAuthSucces ? (
    <div className="auth-page">
      <div className="auth-containter">
        <img className="auth-containter__logo" src="LOGO.svg" alt="Logo" />
        <FormAuthPage />
      </div>
    </div>
  ) : (
    <Redirect to="/api-console" />
  )
}

const mapStateToProps = ({ formAuthReducer }) => ({
  userAuthSucces: formAuthReducer.userAuthSucces,
})

export default connect(mapStateToProps)(AuthPage)
