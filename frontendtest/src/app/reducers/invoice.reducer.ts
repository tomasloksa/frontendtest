import { addInvoice, ActionEx } from '../actions/invoice.actions';

export const initialState = [];

export function InvoiceReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case addInvoice:
      return [action.payload, ...state];
    default:
      return state;
  }
}
