import InputUserRequest from './InputUserRequest'
import OutputUserRequest from './OutputUserRequest'
import '../../../assets/_formsApiConsole.scss'
import { DragIconForms } from '../../Core/DragIconForms'

const FormsApiConsole = () => {
  return (
    <div className="forms-api-console" id="slider">
      <InputUserRequest />
      <div className="forms-api-console__span-drag--container">
        <DragIconForms />
      </div>
      <OutputUserRequest />
    </div>
  )
}

export default FormsApiConsole
