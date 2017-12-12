import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [[YoutubeVideoPlayer]]
})
export class HomePage {

  constructor(public navCtrl: NavController ,private youtube: YoutubeVideoPlayer) {

  }
  private playVideo(){
      this.youtube.openVideo("v=2bjk26RwjyU");
  }
}
