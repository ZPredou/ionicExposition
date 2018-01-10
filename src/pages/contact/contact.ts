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
       "description" : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
       "url"         : "http://www.fondationfrances.com/artistes/jonathan-callan/",
       "sound"       : "assets/sounds/School-bell-sound-effect.mp3"
      },
      {"id"          : 1,
       "author"      : "Lynette Yiadom-Boakye",
       "title"       : "A QUARTER",
       "image"       : "assets/imgs/aQuarter.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL",
       "url"         : "http://www.fondationfrances.com/artistes/lynette-yiadom-boakye/#930",
       "sound"       : "assets/sounds/School-bell-sound-effect.mp3"
      },
      {"id"          : 2,
       "author"      : "James Casebere",
       "title"       : "A BARREL VAULTED ROOM",
       "image"       : "assets/imgs/barrelVaultedRoom.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL",
       "url"         : "http://www.fondationfrances.com/artistes/james-casebere/#260",
       "sound"       : "assets/sounds/School-bell-sound-effect.mp3"
      },
      {"id"          : 3,
       "author"      : "Claire Morgan",
       "title"       : "A HANGING FOG",
       "image"       : "assets/imgs/hangingFog.jpg",
       "description" : "BLABLABLABLABLABLABLABLALBLBLAL",
       "url"         : "http://www.fondationfrances.com/artistes/claire-morgan/#624",
       "sound"       : "assets/sounds/School-bell-sound-effect.mp3"
      },
    ];
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  private goToDetail(contact){
    this.nav.push(DetailPage , {
      contact: contact
    });
  }
}
