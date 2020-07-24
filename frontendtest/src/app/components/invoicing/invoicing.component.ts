import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Store } from '@ngrx/store';
import { CreateInvoiceService } from 'src/app/services/create-invoice.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  invoices: Array<Invoice> = [];

  constructor(
    private store: Store<any>,
    private invoiceService: CreateInvoiceService
  ) {
    store.select('invoices').subscribe(invoices => {
      this.invoices = invoices;
    });
  }

  ngOnInit() {
  }
}
