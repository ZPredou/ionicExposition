import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
    providers: [[Toast]]
})
export class AboutPage {

  constructor(public navCtrl: NavController ,private barcodeScanner: BarcodeScanner ,private toast: Toast){

  }

    public  getCode(){
      this.barcodeScanner.scan().then((barcodeData) => {
         // Success! Barcode data is here
         console.log(barcodeData.text)
      }, (err) => {
         // An error occurred
         this.toast.show(err, '5000', 'center').subscribe( toast => {
            console.log(toast);
         });
      });
    }
  }
