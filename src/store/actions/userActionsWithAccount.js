import { EXIT_USER_FROM_ACCOUNT } from '../../const'

const userActionsWithAccount = () => {
  return (dispatch) => {
    dispatch({
      type: EXIT_USER_FROM_ACCOUNT,
    })
  }
}

export { userActionsWithAccount }
