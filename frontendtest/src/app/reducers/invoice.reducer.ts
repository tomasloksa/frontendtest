import { addInvoice, ActionEx } from '../actions/invoice.actions';

export const initialState = {
  invoices: [],
  paid: 0,
  notPaid: 0
};

export function InvoiceReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case addInvoice:
      return {
        invoices: [action.payload, ...state.invoices],
        paid: state.paid + (action.payload.price > 0.5 ? 1 : 0),
        notPaid: state.notPaid + (action.payload.price <= 0.5 ? 1 : 0)
      };
    default:
      return state;
  }
}
