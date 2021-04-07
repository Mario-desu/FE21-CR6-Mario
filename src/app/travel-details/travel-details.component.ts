import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
/* package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods*/
import { CartService } from '../cart.service';
import { HeroService } from '../hero.service';
import { travels } from '../travels';// import from travel.ts


@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  travel: any;
  constructor(private route: ActivatedRoute, private cartService: CartService, public hero: HeroService) { }

  addToCart(travel) {

    window.alert('Your travel product has been added to the cart!');

    this.cartService.addToCart(travel);// add article to cart

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.travel = travels[+params.get('travelId')];// get page with id    
    });
    this.hero.hide();  //hide hero-component
  }

}
