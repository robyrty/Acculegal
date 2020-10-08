import { Component, OnInit, } from '@angular/core';
import { LoadingController,AlertController, } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {
access_token:string;
url_dyn:string;
state:any;
data:any;
finalUrl:string;



  constructor(public loadingCtrl:LoadingController,public storage:Storage,public route:ActivatedRoute) {
    this.route.queryParams.subscribe(item => {
      console.log(item);
      
        this.data =JSON.parse(item.item);
      
console.log(this.data);
this.ionViewWillEnter();
      
    });
    
  }

  async ionViewWillEnter(){
    // const loading =  await this.loadingCtrl.create({
		// 	message: 'Please wait...',
    //   spinner: 'crescent',
    //   duration:500
    // });
    // await loading.present();
    this.storage.get('user').then((val) => {
      console.log('Your age_2 is', val);
     this.access_token=val['access_token']
     console.log(this.access_token);
     
     var myiframe = document.getElementById("myiframe");
     let url_string=this.data.url;
     let token=this.access_token;
     console.log("token:",this.access_token)
     let adsurl= url_string+"?jwtToken="+token;
     console.log(adsurl);
     myiframe.setAttribute("src" , adsurl)
    //  myiframe.src=adsurl;              
     this.finalUrl=adsurl;
    //  loading.dismiss();
    });
		
  }
	
  ngOnInit() {

  
  }

}
