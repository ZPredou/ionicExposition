import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [[ToastController]]
})
export class HomePage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {}
  private presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Une POP UP dans l application pour annoncer quelque chose d important (ou pas!)',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
