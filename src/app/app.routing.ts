import {QuotesComponent} from './quotes/quotes.component';
import {NewQuoteComponent} from './new-quote/new-quote.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'new-quote', component: NewQuoteComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
