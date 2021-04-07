import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public hero: HeroService) { }

  ngOnInit(): void {
    this.hero.show();// to show hero-commponent(only on homepage)
  }

}
