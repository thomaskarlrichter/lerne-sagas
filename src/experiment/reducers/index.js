export const exp_reducer = (state = { text: 'hallo', zahl: 1 }, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        text: 'Blabla ' + state.zahl,
      };
    case 'ZAHL':
      return {
        ...state,
        zahl: state.zahl + 1,
      };
    default: {
      return state;
    }
  }
};
