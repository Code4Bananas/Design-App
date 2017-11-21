import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

// Branch import
declare var Branch;

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      branchInit();
    });

    platform.resume.subscribe(() => {
      branchInit();
    });

    // Branch initialization
    const branchInit = () => {
      // only on devices
      if (platform.is('core')) { return }
      Branch.initSession(data => {
        // read deep link data on click
        alert('Deep Link Data: ' + JSON.stringify(data));
      });
    }
  }
}