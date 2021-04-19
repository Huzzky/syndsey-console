const REQUEST_AUTH_USER = 'REQUEST_AUTH_USER'
const SUCCESS_AUTH_USER = 'SUCCESS_AUTH_USER'
const ERROR_AUTH_USER = 'ERROR_AUTH_USER'
const UPDATE_AUTH_USER = 'UPDATE_AUTH_USER'

const EXIT_USER_FROM_ACCOUNT_REQUEST = 'EXIT_USER_FROM_ACCOUNT_REQUEST'
const EXIT_USER_FROM_ACCOUNT_SUCCESS = 'EXIT_USER_FROM_ACCOUNT_SUCCESS'
const EXIT_USER_FROM_ACCOUNT_ERROR = 'EXIT_USER_FROM_ACCOUNT_ERROR'
const CHOICE_REQUEST_IN_HISTORY_COMPONENT =
  'CHOICE_REQUEST_IN_HISTORY_COMPONENT'

const USER_SEND_OPERATION_JSON_REQUEST = 'USER_SEND_OPERATION_JSON_REQUEST'
const USER_SEND_OPERATION_JSON_SUCCESS = 'USER_SEND_OPERATION_JSON_SUCCESS'
const USER_SEND_OPERATION_JSON_ERROR = 'USER_SEND_OPERATION_JSON_ERROR'

const USER_NORMALIZATED_JSON_SUCCESS = 'USER_NORMALIZATED_JSON_SUCCESS'
const USER_FORMATING_JSON = 'USER_FORMATING_JSON'

const formInput = {
  login: 'login',
  sublogin: 'sublogin',
  password: 'password',
}

const formTypeValidate = {
  blur: 'blur',
  validate: 'validate',
}

export {
  UPDATE_AUTH_USER,
  USER_FORMATING_JSON,
  USER_NORMALIZATED_JSON_SUCCESS,
  USER_SEND_OPERATION_JSON_REQUEST,
  USER_SEND_OPERATION_JSON_SUCCESS,
  EXIT_USER_FROM_ACCOUNT_ERROR,
  USER_SEND_OPERATION_JSON_ERROR,
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
  ERROR_AUTH_USER,
  EXIT_USER_FROM_ACCOUNT_REQUEST,
  EXIT_USER_FROM_ACCOUNT_SUCCESS,
  CHOICE_REQUEST_IN_HISTORY_COMPONENT,
  formInput,
  formTypeValidate,
}
