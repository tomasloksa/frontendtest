import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  paidCounter = 0;
  notPaidCounter = 0;
  searchText: string;
  invoices: Array<Invoice> = [];

  constructor(private store: Store<any>) {
    store.select('invoices').subscribe(invoices => {
      this.invoices = invoices;
    });
  }

  ngOnInit() {
  }

}
