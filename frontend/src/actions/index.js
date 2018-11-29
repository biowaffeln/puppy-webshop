import Auth from '../services/auth.service'

export const changeLanguage = language => ({
  type: 'CHANGE_LANG',
  language,
})

export const login = formState => async (dispatch) => {
  const { username, password } = formState
  dispatch({
    type: 'LOGIN_REQUEST',
  })
  const data = await Auth.login(username, password)
  data.token
    ? dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data
    })
    : dispatch({
      type: 'LOGIN_FAILURE'
    })
  return data
}

export const logout = () => ({
  type: 'LOGOUT'
})
