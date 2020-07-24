import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Invoice } from 'src/app/models/invoice';
import { addInvoice, InvoiceAdd } from 'src/app/actions/invoice.actions';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  invoices: Array<Invoice> = [];
  paidCounter = 0;
  notPaidCounter = 0;
  searchText: string;

  constructor(private store: Store<any>) {
    store.select('invoices').subscribe(invoices => {
      this.invoices = invoices.invoices;
      this.paidCounter = invoices.paid;
      this.notPaidCounter = invoices.notPaid;
    });
  }

  ngOnInit() {
    if (this.invoices.length === 0) {
      for (let i = 0; i < 500; i++) {
        this.addInvoice(this.randomString(8));
      }
    }
  }

  addInvoice(name: string) {
    if (name) {
      this.store.dispatch(new InvoiceAdd(this.createinvoice(name)));
    }
  }

  private createinvoice(name = this.randomString(8)): Invoice {
    const price = Math.round(Math.random() * 10) / 10;
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
