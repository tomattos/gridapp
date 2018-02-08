const font = (state = {}, action) => {
  switch(action.type){
    case 'ADD_FONT':
      return Object.assign({}, ...state, {fontLink: action.link})
    default:
      return state;
  }
}

export default font