import { validateLogin } from './valdationForm'

const login = {
  normalLogin: 'huzky',
  problemLoginWithCyrillic: 'hфzkу',
  problemLoginWithSpace: 'hu zky',
  problemLoginWithSpaceAndCyrillic: 'hф zky',
  loginNull: '',
}

describe('Login', () => {
  test('should return true with normal login', () => {
    expect(
      validateLogin(
        login.normalLogin,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeTruthy()
  })

  test('should return false with problem login with cyrillic', () => {
    expect(
      validateLogin(
        login.problemLoginWithCyrillic,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })

  test('should return false with problem login with space', () => {
    expect(
      validateLogin(
        login.problemLoginWithSpace,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })

  test('should return false with problem login with space and cyrillic', () => {
    expect(
      validateLogin(
        login.problemLoginWithSpaceAndCyrillic,
        () => {},
        () => {},
        'validate',
      ),
    ).toBeFalsy()
  })
  test('should return false with login null (blur)', () => {
    expect(
      validateLogin(
        login.loginNull,
        () => {},
        () => {},
        'blur',
      ),
    ).toBeFalsy()
  })
})
