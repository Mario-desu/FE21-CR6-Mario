import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
/* package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods*/
import { CartService } from '../cart.service';
import { travels } from '../travels';


@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  travel: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(travel) {

    window.alert('Your travel product has been added to the cart!');

    this.cartService.addToCart(travel);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.travel = travels[+params.get('travelId')];
  
    });
  }

}
