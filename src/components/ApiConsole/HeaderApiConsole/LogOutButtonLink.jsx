import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActionsWithAccount } from '../../../store/actions/userActionsWithAccount'
import { memo } from 'react'

const LogOutButtonLink = ({ userActionsWithAccount }) => {
  return (
    <Link
      className="link-log-out"
      to="/auth-user"
      onClick={() => {
        userActionsWithAccount()
      }}
    >
      <span className="link-log-out__span">Выйти</span>
      <img className="link-log-out__logo" src="log-out.svg" alt="log-out" />
    </Link>
  )
}

LogOutButtonLink.propTypes = {
  userActionsWithAccount: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  userActionsWithAccount: () => dispatch(userActionsWithAccount()),
})

export default memo(connect(null, mapDispatchToProps)(LogOutButtonLink))
