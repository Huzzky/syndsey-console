// BUG исправить тесты

import { formInput, formTypeValidate } from '../const'
import { validateInputForm } from '../utils/valdationForm'

const login = {
  normalLogin: 'x_1616145609494603',
  problemLoginWithCyrillic: 'xф_1616145609494603',
  problemLoginWithSpace: 'x 1616145609494603',
  problemLoginWithSpaceAndCyrillic: 'xф _1616145609494603',
  loginNull: '',
}

describe('Login', () => {
  test('should return true with normal login', () => {
    expect(
      validateInputForm(
        login.normalLogin,
        () => {},
        () => {},
        formTypeValidate.validate,
        formInput.login,
      ),
    ).toBe(true)
  })
})
