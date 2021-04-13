import PropTypes from 'prop-types'
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

AuthPage.propTypes = {
  userAuthSucces: PropTypes.bool,
}

const mapStateToProps = ({ userActionsReducer }) => ({
  userAuthSucces: userActionsReducer.userAuthSucces,
})

export default connect(mapStateToProps)(AuthPage)
