import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Customer, AppState, LoadCustomers,
  getCustomers, getCustomersError,
  DeleteCustomer, LoadCustomer
} from 'customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCustomers());
    this.customers$ = this.store.pipe(select(getCustomers));
    this.error$ = this.store.pipe(select(getCustomersError));
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are You Sure')) {
      this.store.dispatch(new DeleteCustomer(customer.id));
    }
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(new LoadCustomer(customer.id));
  }
}
