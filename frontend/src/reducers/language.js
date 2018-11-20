export const Languages = {
  GERMAN: 'GERMAN',
  ENGLISH: 'ENGLISH',
}

const language = (state = Languages.GERMAN, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return action.language
    default:
      return state
  }
}

export default language
