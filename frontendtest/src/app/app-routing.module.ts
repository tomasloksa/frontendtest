import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'invoicing', component: InvoicingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
