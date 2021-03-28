import { validateInputForm } from '../../../utils/valdationForm'
import { formTypeValidate } from '../../../const'

export const InputFormAuth = ({
  setValueNullOrHaveTextFunc,
  setValueCheckFunc,
  value,
  typeFormInput,
  name,
}) => {
  const validateInput = (valueInput, type) => {
    validateInputForm(
      valueInput,
      setValueCheckFunc,
      setValueNullOrHaveTextFunc,
      type,
      typeFormInput,
    )
  }
  return (
    <>
      <p
        className={value ? typeFormInput + '__p' : typeFormInput + '__p--error'}
      >
        {name}
      </p>
      <input
        className={
          value ? typeFormInput + '__input' : typeFormInput + '__input--error'
        }
        onBlur={(e) => {
          validateInput(e.currentTarget.value, formTypeValidate.blur)
        }}
        type={typeFormInput === 'login' ? 'test' : 'password'}
        required
        onChange={(e) => {
          validateInput(e.currentTarget.value.trim(), formTypeValidate.validate)
        }}
      />
    </>
  )
}
