import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    providers: [[Vibration]]
})
export class ContactPage {

  constructor(public navCtrl: NavController ,private vibration: Vibration) {

  }
  private vibrate(){
    this.vibration.vibrate([500,100,500,200,300,500]);
  }

}
