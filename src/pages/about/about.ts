import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner){

  }

  private scanBarcode() {

    this.options = {
      prompt: 'Scan a barcode to see the result :)'
    }
    this.results = this.barcode.scan(this.options)
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
