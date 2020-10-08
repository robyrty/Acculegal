import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {OnInit}  from '@angular/core';
import{Tab4Page} from 'src/app/tab4/tab4.page'
import { Events } from 'src/app/events.service';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user2:string;
  user3: string;
  access_token:string;
  modulesitem:any;
  submodule:any;
  public username;
  item:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public apiService:ApiService,
    public storage:Storage,
    public events:Events,
    public router:Router
  ) {
    this.initializeApp();
    this.username="";
    // events.subscribe('user:login', user=>{
    //   this.username=user['user'].name;
    //   this.modulesitem=user['modules'];
    //   this.submodule=user['subModules'];
    //   console.log("uername:",this.username);
    //   console.log("modules",this.modulesitem,this.submodule);
    // }) ;

      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewWillEnter(){
    
   this.storage.get('user').then((val) => {
      console.log('Your age_n is', val);
      this.modulesitem=val['modules'];
      this.submodule=val['subModules']
      
      console.log('modules',this.modulesitem)
    });
    this.storage.get('access_token').then((val)=>{
      console.log('tokenis',val);
      this.access_token=val;
    });
  

  };

  openDetailsWithQueryParams(item : any) {
    console.log(item)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(item)
      }
    };
    this.router.navigate(['iframe'], navigationExtras);
    console.log('hello')
  }

  ngOnInit(){
    this.ionViewWillEnter();
  }
}
