import { validateInputForm } from './valdationForm'

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
        'validate',
        'login',
      ),
    ).toBe(true)
  })

  test('should return false with problem login with cyrillic', () => {
    expect(
      validateInputForm(
        login.problemLoginWithCyrillic,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })

  test('should return false with problem login with space', () => {
    expect(
      validateInputForm(
        login.problemLoginWithSpace,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })

  test('should return false with problem login with space and cyrillic', () => {
    expect(
      validateInputForm(
        login.problemLoginWithSpaceAndCyrillic,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })
  test('should return false with login null (blur)', () => {
    expect(
      validateInputForm(
        login.loginNull,
        () => {},
        () => {},
        'blur',
      ),
    ).toBeFalsy()
  })
})
