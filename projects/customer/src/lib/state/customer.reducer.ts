import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as customerAction from './customer.actions';
import { Customer } from '../customer.model';
import * as fromRoot from '../app_state/app-state';

// now i going to exteds EntityState and we can remove customers property
export interface CustomerState extends EntityState<Customer>{
    // customers: Customer[];
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// we export app state with extend root app state which we already created in app-state.ts file
export interface AppState extends fromRoot.AppState {
    customers: CustomerState;
}

// we are create an instance of entity adaptor this will provide us a usefull method that we need
export const customerAdaptor: EntityAdapter<Customer> = createEntityAdapter<Customer> ();

// default customer with some initial values
export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ''
}

/*
// we export initial state that type is CustomerState and assigne default values
export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ''
};
*/
//now we assign the default customer to initial state
export const initialState = customerAdaptor.getInitialState(defaultCustomer);
// Decleare and export the customer reducer function which have two arguments state with initial default
// state and action type CustometAction and its going to return customer state
export function customerReducer( state = initialState, action: customerAction.Actions): CustomerState {
    // reducer have switch statement and it going to return a different state based on the action type
    switch (action.type) {
        case customerAction.CustomerActionTypes.LOAD_CUSTOMERS: {
            // this return the current state and loading through property true
            return {
                ...state,
                loading: true
            };
        }
        case customerAction.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
            /*
            // this return the current state through properties loading false and loaded ture
            // and the customers from the action payload
            return {
                ...state,
                loading: false,
                loaded: true,
                customers: action.payload
            };
            */
           // we can now use the addAll() to add the customer from the action payload
           // and any property we want to update
           return customerAdaptor.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
           })
        }
        case customerAction.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
            // this return the current state through properties loading false and loaded false
            // the customers empty object and error from the action payload
            return {
                ...state,
                loading: false,
                loaded: false,
                // customers: [],
                entities: {},
                error: action.payload
            };
        }
        default: {
            // default state is return the current state
            return state;
        }
    }
}


// we are define here the feature selector for customer slice of a state.
// and we will assign it where we want by using create feature selector function passing in the name of slice
const getCustomerFeatureState = createFeatureSelector<CustomerState> (
    'customers'
);

// we can subscribe of following selectors in our components
// here we are create a selector for specific properties we want, we do that by using createSelector() method
// and passing with feature state that we defined above
export const getCustomers = createSelector(
    getCustomerFeatureState,
    /*
    // following is the specific property we want to get (like customer property)
    (state: CustomerState) => state.customers
    */
   // now we use getSelector() provided by entity adaptor to get the property we wnat from the state and it will do the logic for us
   customerAdaptor.getSelectors().selectAll
);

// selector for customer loading
export const getCustomersLoading = createSelector(
    getCustomerFeatureState,
    // following is the specific property we want to get (like loading property)
    (state: CustomerState) => state.loading
);

// for customer loaded
export const getCustomersLoaded = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.loaded
);

// for customer error
export const getCustomersError = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.error
);
