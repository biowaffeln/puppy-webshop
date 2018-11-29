const emptyState = {
  loading: false,
  data: null
}

const authentication = (state = emptyState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        loading: true,
        data: null
      }
    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        data: action.payload
      }
    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return emptyState
    default:
      return state
  }
}

export default authentication
