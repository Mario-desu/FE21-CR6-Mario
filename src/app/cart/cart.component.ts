import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//validators necessary to use validators in FormGroup
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

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
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
   });

  constructor(private cartService: CartService, public hero: HeroService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.hero.hide();// hide hero-component

/*for calculating total price */


    for (let priceValue of this.items) {//get values from object
      priceValue = priceValue.price;//get only price from object
      // console.log(priceValue);
      this.priceArray.push(priceValue);//push price into empty array
      console.log(this.priceArray);
      this.sum = this.priceArray.reduce(function(a, b){
        return a+b;//reduce values to one in the end
      })
      console.log (this.sum);
    }

    if(this.sum <= 700) {
      // this.sumString = this.sum.toString();
      document.getElementById("sumInput").innerHTML = `Total: € ${this.sum}`;
    }else if (this.sum > 700) {
      // this.sumString = this.sum.toString();
      this.sum = (this.sum *0.9).toFixed(2);//limit decimals to 2 digits
      console.log(this.sum);
      document.getElementById("sumInput").innerHTML = `Total: € ${this.sum} (10 % discount considered)`;
    }
  }

  //what happens when you click on "Book your trip":

  onSubmit(customerData) {
    // Process checkout data here  
    let sendBooking = document.getElementById('sumInput');

    if (this.checkoutForm.valid) {
      sendBooking.innerHTML = 'Thank you for booking!';
      sendBooking.style.color = 'green';
      this.checkoutForm.reset();//empty form when submit
      this.items = this.cartService.clearCart();//clear cart when submit
    }else{
      sendBooking.innerHTML = 'Please fill in all fields!';
      sendBooking.style.color = 'red';
      sendBooking.style.fontSize = '1.4em';
    }
    
    

    console.warn('Your order has been submitted', customerData);  
  
     
  }

}
