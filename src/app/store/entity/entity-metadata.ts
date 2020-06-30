import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  
  User: {},
  Product: {},
  Cart : {    
  },
  StorePayment: {},
  CartItem: {},
  Customer:{}

};

const pluralNames = { 
  User: 'User',
  Product: 'Products',
  Customer: 'Customers'
 };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
