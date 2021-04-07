import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HeroService } from '../hero.service';


import { travels } from '../travels';// import drom travels.ts


@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {
  travels = travels;
  constructor(private cartService: CartService, public hero: HeroService) { }

  addToCart(travel) {

    window.alert('Your product has been added to the cart!');

    this.cartService.addToCart(travel);

  }

  ngOnInit(): void {
     this.hero.hide();// hide hero-component
  }

}
