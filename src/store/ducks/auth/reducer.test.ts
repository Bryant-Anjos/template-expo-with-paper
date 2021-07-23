import { Action, signIn, signOutSuccess } from './actions'
import reducer from './index'

test('auth should return the initial state', () => {
  expect(reducer(undefined, {} as Action)).toEqual({
    signed: false,
    accessToken: '',
    user: undefined,
    error: '',
    success: '',
  })
})

test('signIn should add the user and define signed to true', () => {
  expect(
    reducer(
      undefined,
      signIn({
        accessToken: 'd0f2d196-6534-4698-9706-86cb58a0fc56',
        user: {
          id: '89bfbaf0-57d7-4d47-b1fe-38754743cfd8',
          email: 'teste@email.com',
          name: 'User Test',
        },
      }),
    ),
  ).toEqual({
    signed: true,
    accessToken: 'd0f2d196-6534-4698-9706-86cb58a0fc56',
    user: {
      id: '89bfbaf0-57d7-4d47-b1fe-38754743cfd8',
      email: 'teste@email.com',
      name: 'User Test',
    },
    error: '',
    success: '',
  })
})

test('signOutSuccess should remove the user and define signed to false', () => {
  expect(
    reducer(
      {
        signed: true,
        accessToken: 'd0f2d196-6534-4698-9706-86cb58a0fc56',
        user: {
          id: '89bfbaf0-57d7-4d47-b1fe-38754743cfd8',
          email: 'teste@email.com',
          name: 'User Test',
        },
        error: '',
        success: '',
      },
      signOutSuccess(),
    ),
  ).toEqual({
    signed: false,
    accessToken: '',
    user: undefined,
    error: '',
    success: '',
  })
})
