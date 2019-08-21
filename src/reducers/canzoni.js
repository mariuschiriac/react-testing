const canzoni = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          rating: 4,
          titolo: action.title
        }
      ];
    default:
      return state;
  }
};

export default canzoni;
