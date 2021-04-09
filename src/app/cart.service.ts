import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];
  res;
  constructor() { }
  // sum :number = 0;
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

/*if using the function, total stays in the cart, my version
works in cart.component.ts only if you use  return a+b for reduce*/ 

  // calculateTotal(){
  //   for (let priceValue of this.items) {//get values from object
  //     this.sum += priceValue.price;
  //     // priceValue = priceValue.price;//get only price from object
  //     // console.log(priceValue);
  //     // this.priceArray.push(priceValue);//push price into empty array
  //     // console.log(this.priceArray);
  //     // this.sum = this.items.reduce(function(a, b){
  //     //   return a.price + b.price;//reduce values to one in the end
  //     // })
  //     // console.log (this.sum);
  //   }

  //   if(this.sum <= 700) {
  //     // this.sumString = this.sum.toString();
  //     return `Total: € ${this.sum}`;
  //   }else if (this.sum > 700) {
  //     // this.sumString = this.sum.toString();
  //     this.sum = (this.sum *0.9);//limit decimals to 2 digits
  //     console.log(this.sum);
  //     this.res = this.sum.toFixed(2);
  //     return `Total: € ${this.res} (10 % discount considered)`;
  //   }
  // }

}