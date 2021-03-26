import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];
  constructor() { }

  addToCart(travel) {
    this.items.push(travel);
  }
 

  getItems() {
    return this.items;
  }
 

  clearCart() {
    this.items = [];
    return this.items;
  }


}
