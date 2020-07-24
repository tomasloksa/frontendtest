import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterPipe } from './filter.pipe';
import { StoreModule } from '@ngrx/store';
import { invoices } from './reducers/invoice.reducer';
import { SidebarComponent } from './components/invoicing/sidebar/sidebar.component';
import { ContentComponent } from './components/invoicing/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicingComponent,
    WelcomeComponent,
    FilterPipe,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ invoices })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
