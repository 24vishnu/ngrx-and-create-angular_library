import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as customerAction from 'customer';
import * as fromCustomer from 'customer';
import { Customer } from 'customer'; 

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<fromCustomer.AppState>) { }

  ngOnInit() {
    // dispatch an action with type payload
    // this.store.dispatch({type: 'LOAD_CUSTOMERS'});
    this.store.dispatch(new customerAction.LoadCustomers());
    // this.store.subscribe( state => { this.customers = state.customers.customers; });
    // we are subscribing the selector here
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
  }
}
