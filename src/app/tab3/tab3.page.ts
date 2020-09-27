import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
user1 :Variable;
access_token:any;

  constructor(
    public router:Router,
    public storage:Storage
  ) {
    // storage.get('user').then((val) => {
    //   console.log('Your age is', val);
    //   this.user1=val;
      
    // });
   
  }
  login(){
    this.router.navigateByUrl('/tabs/tab2') ;
  
 
  }
}
