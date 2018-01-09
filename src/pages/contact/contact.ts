import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    providers: [[Vibration]]
})
export class ContactPage {
  contacts;

  constructor(public nav: NavController ,private vibration: Vibration) {
    this.nav = nav;

    this.contacts = [
      {"id"          : 0,
       "author"      : "Jonathan Callan",
       "title"       : "AMERICA THE BEAUTIFUL",
       "image"       : "assets/imgs/americathebeautiful.jpg",
       "description" : "UNE DESCRIPTION CHOISIE"
      },
      {"id"    : 1,
       "author": "Lynette Yiadom-Boakye",
       "title" : "A QUARTER",
       "image" : "assets/imgs/aQuarter.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL"
      },
      {"id"    : 2,
       "author": "James Casebere",
       "title" : "A BARREL VAULTED ROOM",
       "image" : "assets/imgs/barrelVaultedRoom.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL"
      },
      {"id"    : 3,
       "author": "Claire Morgan",
       "title" : "A HANGING FOG",
       "image" : "assets/imgs/hangingFog.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL"
      },
    ];
  }
  private vibrate(){
    this.vibration.vibrate([0,300,100,50,100,50,100,50,100,50,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,150,150]);
  }
  private goToDetail(contact){
    this.nav.push(DetailPage , {
      contact: contact
    });
  }
}
