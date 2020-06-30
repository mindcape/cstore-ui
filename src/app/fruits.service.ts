import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './store/models/Product';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class FruitsServiceService  extends EntityCollectionServiceBase<Product> {
  //constructor(private http: HttpClient) {}

  // getAll() {
  //   return this.http.get('http://localhost:8080/api/products');
  // }
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}
