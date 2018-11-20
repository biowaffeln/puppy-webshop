export const Languages = {
  GERMAN: 'GERMAN',
  ENGLISH: 'ENGLISH',
}

const lang = (state = Languages.GERMAN, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return action.lang
    default:
      return state
  }
}

export default lang
