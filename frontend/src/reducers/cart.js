// Mark

const cart = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PUPPY':
      return {
        ...state, [action.puppy.id]: {
          puppy: action.puppy,
          amount: 1
        }
      }

    case 'REMOVE_PUPPY':
      const newState = { ...state }
      delete newState[action.id]
      return newState

    case 'UPDATE_PUPPY_AMOUNT':
      return {
        ...state, [action.id]:
        {
          ...state[action.id],
          amount: action.amount
        }
      }

    case 'LOGOUT':
    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

export default cart
