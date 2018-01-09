import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  title:string;
  description:string;
  image:string;
  constructor(public nav: NavController, public navParams: NavParams) {
    this.navParams = navParams;
    this.title = this.navParams.get('contact').title;
    this.description = this.navParams.get('contact').description;
    this.image = this.navParams.get('contact').image;
  }
  goBack() {
    console.log("popping");
    this.nav.pop();
  }
}
