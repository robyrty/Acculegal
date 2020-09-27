import { Injectable } from '@angular/core';
import{LoadingController} from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class LoaderNService {

  constructor(public loadingController:LoadingController) { }
  showHideAutoLoader(){
    this.loadingController.create({
      message:'please wait',
      duration:4000
    }).then((res)=>{
      res.present();
      res.onDidDismiss().then((dis)=>
      {
        console.log('2 min',dis);
      });
    });
  }
}
