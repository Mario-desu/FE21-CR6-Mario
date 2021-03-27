import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  sum:any; // for calculating
  priceArray:any = [];// for calculating
  sumString:any;// for calculating
  

  checkoutForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    street: new FormControl(''),
    zipcode: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl('')
   });

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

/*for calculating total price */


    for (let priceValue of this.items) {
      priceValue = priceValue.price;
      this.priceArray.push(priceValue);
      console.log(this.priceArray);
      this.sum = this.priceArray.reduce(function(a, b){
        return a+b;
      })
      console.log (this.sum);
    }

    if(this.sum <= 700) {
      document.getElementById("sumInput").innerHTML = `Total: € ` + this.sum;
    }else if (this.sum > 700) {
      this.sum = this.sum *0.9;
      console.log(this.sum);
      document.getElementById("sumInput").innerHTML = `Total: € ` + this.sum + ` (10 % discount considered)`;
    }
  }

  onSubmit(customerData) {
    // Process checkout data here  
    console.warn('Your order has been submitted', customerData);  
  
    this.items = this.cartService.clearCart();  
    this.checkoutForm.reset();



  
  }

}
