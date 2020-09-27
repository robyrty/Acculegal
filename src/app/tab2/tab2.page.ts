import { Component , OnInit} from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
loading:any;

  constructor(public loadingController: LoadingController,public alertCtrl:AlertController,
    ){ 

    
}


  ngOnInit(){
   
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

 