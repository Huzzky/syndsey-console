import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { AnimationLoader } from '../../Core/AnimationLoader'

const BtnSendJSONToServer = ({ isLoading, JSONFromUser }) => {
  console.log(isLoading, JSONFromUser)
  return isLoading ? <AnimationLoader /> : <button>Отправить</button>
}

BtnSendJSONToServer.propTypes = {
  isLoading: PropTypes.bool,
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  isLoading: userOperationsReducer.isLoading,
  JSONFromUser: userOperationsReducer.JSONFromUser,
})

const mapDispatchToProps = {}

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnSendJSONToServer),
)
