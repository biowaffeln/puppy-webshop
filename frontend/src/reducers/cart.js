const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PUPPY':
      return [...state, action.puppy]

    case 'REMOVE_PUPPY':
      return state.filter(puppy => puppy.id !== action.id)

    case 'CLEAR_ALL':
      return []

    default:
      return state
  }
}

export default cart
