import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    providers: [[Vibration]]
})
export class ContactPage {

  constructor(public nav: NavController ,private vibration: Vibration) {
    this.nav = nav;
  }
  private vibrate(){
    this.vibration.vibrate([0,300,100,50,100,50,100,50,100,50,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,150,150]);
  }
  private goToDetail(){
    this.nav.push(DetailPage);
  }
}
