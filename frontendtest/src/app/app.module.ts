import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterPipe } from './filter.pipe';
import { StoreModule } from '@ngrx/store';
import { InvoiceReducer } from './reducers/invoice.reducer';

@NgModule({
  declarations: [
    AppComponent,
    InvoicingComponent,
    WelcomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ invoices: InvoiceReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
