import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateInvoiceService } from 'src/app/services/create-invoice.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public invoiceService: CreateInvoiceService) { }

  ngOnInit() {
  }


}
