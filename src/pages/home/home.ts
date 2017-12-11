import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,private youtube: YoutubeVideoPlayer) {

  }
  private playVideo(id){
    try{
      this.youtube.openVideo(this.$id);
    }
    catch(e){
      console.error(e);
    }
  }
}
