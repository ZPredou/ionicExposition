import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
  providers: [[Vibration]]
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private vibration: Vibration) {

  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
}
