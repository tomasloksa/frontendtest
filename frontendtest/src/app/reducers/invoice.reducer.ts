export const invoices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      console.log(state);
      return [action.payload, ...state];
    default:
      return state;
  }
};
