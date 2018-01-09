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
      { "id"   : 0,
       "author": "Jonathan Callan",
       "titre" : "AMERICA THE BEAUTIFUL",
       "image" : "assets/imgs/americathebeautiful.jpg",
      },
      { "id"   : 1,
       "author": "Lynette Yiadom-Boakye",
       "titre" : "A QUARTER",
       "image" : "assets/imgs/aQuarter.jpg",
      },
      { "id"   : 2,
       "author": "James Casebere",
       "titre" : "A BARREL VAULTED ROOM",
       "image" : "assets/imgs/barrelVaultedRoom.jpg",
      },
      { "id"   : 3,
       "author": "Claire Morgan",
       "titre" : "A HANGING FOG",
       "image" : "assets/imgs/hangingFog.jpg",
      },
    ];
  }
  private vibrate(){
    this.vibration.vibrate([0,300,100,50,100,50,100,50,100,50,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,150,150]);
  }
  private goToDetail(contact){
    this.nav.push(DetailPage,{
      param1: 'John', param2: 'Johnson'
    });
  }
}
