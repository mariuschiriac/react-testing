export const reduceConfig = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT':
      return ++state;
    default:
      return state;
  }
};
