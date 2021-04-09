import { InputUserRequest } from './InputUserRequest'
import { OutputUserRequest } from './OutputUserRequest'
import '../../../assets/_formsApiConsole.scss'

const FormsApiConsole = () => {
  return (
    <div className="forms-api-console">
      <div className="forms-api-console__container">
        <InputUserRequest />
        <img
          src="drag-icon.svg"
          alt="drag-icon"
          className="forms-api-console__span-drag"
        />
        <OutputUserRequest />
      </div>
    </div>
  )
}

export default FormsApiConsole
