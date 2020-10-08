import { Component , OnInit,Sanitizer} from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl ,SafeUrl,  } from '@angular/platform-browser';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
loading:any;
access_token:string;
myiframe:HTMLImageElement;
  
  

  constructor(public loadingCtrl: LoadingController,public alertCtrl:AlertController,
    public storage:Storage,private router:ActivatedRoute
    ){
      this.storage.get('access_token').then((val)=>{
        console.log('tokenis',val);
        this.access_token=val;
       
      }); 
      
  

    this.ionViewWillEnter();
    
}

// async sanitizeLink(){
//   const loading = await this.loadingCtrl.create({
//     message: 'Logging You In Please Wait...',
//     spinner: 'crescent',
//   });
//   await loading.present();
//   this.storage.get('user').then((val) => {
//     this.access_token = val['acess_token'];
//     console.log(this.access_token);
//   });
//   var URL =  `https://acculegal-erp.area51.etherealwork.net/admin/dashboard?jwtToken=${this.access_token_token}`;
//   console.log(URL);
//   // Use sanitizer for URL
//   this.safeUrl = this.domSanitizer.bypassSecurityTrustUrl(URL);
//   // Hide Spinner
//   loading.dismiss();
// }

  async ionViewWillEnter(){
    const loading =  await this.loadingCtrl.create({
			message: 'Please wait...',
      spinner: 'crescent',
      duration:500
    });
    await loading.present();
    this.storage.get('user').then((val) => {
      console.log('Your age_2 is', val);
     this.access_token=val['access_token']
     console.log(this.access_token);
     
     var myiframe = document.getElementById("myiframe");
     let url_string="https://acculegal-erp.area51.etherealwork.net/admin/dashboard";
     let token=this.access_token;
     console.log("token:",this.access_token)
     let adsurl= url_string+"?jwtToken="+token;
     console.log(adsurl);
     myiframe.setAttribute("src",adsurl);
     loading.dismiss();
    });
		
  }

  ngOnInit(){
    // let myiframe = document.getElementById("myiframe");
    // let url_string="https://acculegal-erp.area51.etherealwork.net/admin/dashboard";
    // let token=this.access_token;
    // console.log("token:",this.access_token)
    // let adsurl= url_string+"?jwtToken="+token;
    // console.log(adsurl);
    // myiframe.src= adsurl;
    
  // this.url=`https://acculegal-erp.area51.etherealwork.net/admin/dashboard?jwtToken=${this.access_token}`
  
  }


//    async loadong(){
//    const loading = this.loadingController.create({message:'please wiat', duration:2000});
//   await loading.present();
// 

// async presentAlert() {
//   let alert = this.alertCtrl.create({
//     message: 'Low battery',
//     subHeader: '10% of battery remaining',
//     buttons: ['Dismiss']
//   });
//   (await alert).present();
 }

      