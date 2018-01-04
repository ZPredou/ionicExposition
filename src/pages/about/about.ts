import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HeaderColor } from '@ionic-native/header-color';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [ BarcodeScanner ]
})
export class AboutPage {
  results: {};

  constructor(public navCtrl: NavController, public barcode: BarcodeScanner, public headerColor: HeaderColor) {
    this.headerColor.tint('#becb29');
  }
  public async scanBarcode() {
    await this.barcode.scan()
      .then((result) => {
        alert(
          "We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled
        )
      })
      .catch((error) => {
        alert(error);
      })
  }

}
