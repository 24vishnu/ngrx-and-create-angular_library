import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
import { HttpClientModule } from '@angular/common/http';

import { RouterStateSerializer} from '@ngrx/router-store';

import {CustomSerializer } from './share/utils';

@NgModule({
  declarations: [],
  imports: [
    // StoreModule.forRoot({'customers', customerReducer}),
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffect]),
    HttpClientModule
  ],
  exports: [],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}]
})
export class CustomerModule { }
