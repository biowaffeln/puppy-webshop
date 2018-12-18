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

export const addPuppy = puppy => ({
  type: 'ADD_PUPPY',
  puppy
})

export const removePuppy = id => ({
  type: 'REMOVE_PUPPY',
  id
})

export const updatePuppyAmount = (id, amount) => ({
  type: 'UPDATE_PUPPY_AMOUNT',
  id,
  amount: Math.max(1, Math.min(amount, 10))
})


