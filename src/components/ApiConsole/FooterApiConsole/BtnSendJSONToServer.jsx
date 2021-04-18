import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { userSendJSONRequestToServer } from '../../../store/actions/userSendJSONRequestToServer'
import { AnimationLoader } from '../../Core/AnimationLoader'

const BtnSendJSONToServer = ({
  isLoading,
  JSONFromUser,
  userSendJSONRequestToServer,
}) => {
  console.log(isLoading, JSONFromUser)
  return isLoading ? (
    <AnimationLoader />
  ) : (
    <button
      onClick={() => {
        userSendJSONRequestToServer(JSONFromUser)
      }}
      disabled={!JSONFromUser[0] ? 'disabled' : ''}
    >
      Отправить
    </button>
  )
}

BtnSendJSONToServer.propTypes = {
  JSONFromUser: PropTypes.array,
  isLoading: PropTypes.bool,
  userSendJSONRequestToServer: PropTypes.func,
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  isLoading: userOperationsReducer.isLoading,
  JSONFromUser: userOperationsReducer.JSONFromUser,
})

const mapDispatchToProps = (dispatch) => ({
  userSendJSONRequestToServer: (userRequestToServer) =>
    dispatch(userSendJSONRequestToServer(userRequestToServer)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnSendJSONToServer),
)
