import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualHomePage } from './visual-home';

@NgModule({
  declarations: [
    VisualHomePage,
  ],
  imports: [
    IonicPageModule.forChild(VisualHomePage),
  ],
})
export class VisualHomePageModule {}
