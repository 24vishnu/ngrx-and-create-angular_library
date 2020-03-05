import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';

import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    // StoreModule.forRoot({'customers', customerReducer}),
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffect]),
    HttpClientModule
  ],
  exports: [CustomerComponent]
})
export class CustomerModule { }
