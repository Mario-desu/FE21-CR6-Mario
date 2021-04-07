import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
/*also add Validators, otherwise they won't work*/
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName:new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
     })

  constructor( public hero: HeroService) { }

  ngOnInit(): void {
    this.hero.hide(); // hide hero Component
  }


  onSubmit(){
    var sendAlert = document.getElementById('sendAlert');
    //message if Form was completely filled out
    if (this.contact.valid) {
      sendAlert.innerHTML = 'Your message has been sent.';
      sendAlert.style.color = 'green';
      this.contact.reset();

     // if not filled out completely 
    }else{
      sendAlert.innerHTML = 'Please fill in all fields.';
      sendAlert.style.color = 'red';
    }
  }

}
