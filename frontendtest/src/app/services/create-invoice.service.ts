import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class CreateInvoiceService {

  constructor(private store: Store<any>) { }

  addInvoice(name: string) {
    if (name) {
      this.store.dispatch({
        type: 'ADD_INVOICE',
        payload: this.createinvoice(name)
      });
    }
  }

  private createinvoice(name = this.randomString(8)): Invoice {
    const price = Math.round(Math.random() * 10) / 10;
    if (price > 0.5) {
      this.paidCounter++;
    } else {
      this.notPaidCounter++;
    }
    return { name, price };
  }

  private randomString(length): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
