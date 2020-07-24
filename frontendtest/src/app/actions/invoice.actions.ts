import { createAction, Action } from '@ngrx/store';

export const addInvoice = '[invoicing Component] Create Invoice';

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class InvoiceAdd implements ActionEx {
  readonly type = addInvoice;
  constructor(public payload: any) {
  }
}
