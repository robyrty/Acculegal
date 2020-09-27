import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {OnInit}  from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user2:string;
  user3: string;
  access_token:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public apiService:ApiService,
    public storage:Storage
  ) {
    this.initializeApp();
 
    storage.get('user').then((val) => {
      console.log('Your age_n is', val);
      this.user2=val.name;
      this.user3=val.email;
    });
    storage.get('access_token').then((val)=>{
      console.log('tokenis',val);
      this.access_token=val;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    
  }
}
