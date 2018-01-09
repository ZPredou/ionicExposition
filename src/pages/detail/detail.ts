import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }
  this.parameter1 = navParams.get('param1');
  this.parameter2 = navParams.get('param2');
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
