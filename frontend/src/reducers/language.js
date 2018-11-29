export const Languages = {
  DE: 'DE',
  EN: 'EN',
}

const language = (state = Languages.EN, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return action.language
    default:
      return state
  }
}

export default language
