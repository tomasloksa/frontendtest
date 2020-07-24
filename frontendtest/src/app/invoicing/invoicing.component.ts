import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  constructor() { }

  invoices: Array<Invoice> = [];
  paidCounter = 0;
  notPaidCounter = 0;
  searchText: string;

  ngOnInit() {
    for (let i = 0; i < 500; i++) {
      this.invoices.push(this.createinvoice());
    }
  }

  addInvoice(name: string) {
    if (name) {
      this.invoices.unshift(this.createinvoice(name));
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
