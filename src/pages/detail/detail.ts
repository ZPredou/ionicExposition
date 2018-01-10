import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [[Vibration]]
})
export class DetailPage {
  title:string;
  description:string;
  image:string;
  author:string;
  url:string;
  soundMenu:boolean;
  constructor(public nav: NavController, public navParams: NavParams, private vibration: Vibration) {
    this.navParams   = navParams;
    this.title       = this.navParams.get('contact').title;
    this.description = this.navParams.get('contact').description;
    this.image       = this.navParams.get('contact').image;
    this.author      = this.navParams.get('contact').author;
    this.url         = this.navParams.get('contact').url;
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  playAudio(){
    if(this.soundMenu)
    {
      this.soundMenu=false;
    }
    else{
      this.soundMenu=true;
    }
  }
}
