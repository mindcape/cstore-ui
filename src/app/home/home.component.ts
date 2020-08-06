import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../store/models/Product';
import { Observable } from 'rxjs';
import { FruitsServiceService } from '../fruits.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  // constructor(private store: Store<{ items: Product[]; cart:Product[] }>) {
  //   store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  // }
  constructor(private fruitService: FruitsServiceService) {

  }

  items: Product[] = [];

  ngOnInit() {
   this.getProduct();
  }

  getProduct(){
    this.fruitService.getAll().subscribe(data =>
       {
         this.items = data;
       })
  }
}
