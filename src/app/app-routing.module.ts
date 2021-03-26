import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },

  {
    path: "blog", component: BlogPageComponent
  },

  {
    path: "travels",component: TravelPageComponent
  },
  
  {

    path: 'travels/travels/:travelId', component: TravelDetailsComponent

},

{

  path: 'cart', component: CartComponent

}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
