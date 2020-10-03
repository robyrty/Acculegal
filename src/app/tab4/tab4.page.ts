import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';
import { HttpClient} from '@angular/common/http';
import { Events } from '../events.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page  {
  userIsAuthenticated :boolean;
  input1:string ="";
  input2:string ="";
  user:any;

     

  constructor(
    private alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public navCtrl:NavController,
    private storage:Storage,
    public apiService:ApiService,
    public http:HttpClient,
    public events:Events,
    public router:Router
  ) { }
  onClick() {
		console.log(this.input1);
		console.log(this.input2);
	}

	async presentAlert() {
		let alert = this.alertCtrl.create({
			message: 'Please Check the credentials',
			
			buttons: ['Dismiss']
		});
		(await alert).present();
	}


	// login = async () => {
  //   try {
  //       await fetch(`https://acculegal-erp.area51.etherealwork.net /api/v1/auth/login`, {//https://raymaxerp.com/api/v1/auth/login
  //               method: "POST",
  //               body: JSON.stringify({
  //                 mobile: this.input1,
  //                 password: this.input2
  //               }),
  //               headers:{
	// 								"Content-Type":'application/json',
	// 								"Access-Control-Allow-Origin": "*"
  //               }
  //             })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res.success) {

	// 					this.router.navigateByUrl('/app/tabs/tab2')
						
  //           }else{
   //           console.log(res)
            
  //         }
  //       })
  //       .catch(error => console.log(error))
  //   }
  //   catch (e) {
      
  //   }
  // }
	

 	async login() {
		const loading = await this.loadingCtrl.create({
			message: 'Please wait...',
			spinner: 'crescent',
		});
		await loading.present();
		
	//Attempt login
		this.http.post(this.apiService.getUrl("/auth/login"),{
			"email": this.input1,
			"password": this.input2,
		},
		{
      headers: { 
			'Content-Type': 'application/json',
      'Accept': 'application/json',
			"Access-Control-Allow-Origin":"POST"
		} 
	} ).subscribe(
			(data )=> {
        // this.router.navigateByUrl('/app/tabs/tab2')
          console.log(data)
          // if(data.success){
          //   alert("Successful")
          // }
          // this.user = data['user'];
        // Clear storage ,
        
				this.storage.remove('user').then(res => {
        // 	// Set User
                  //  alert("ucess");
					this.storage.set('user', data).then(val => {
            // Hide Spinner
            
						loading.dismiss();
            this.user  = data['user'];
            
						// Publish Event for Menu-refresh
						
            this.events.publish('user:login', this.user);
            this.user.login= true;
                               
						this.router.navigate(['/app/tabs/tab2'], {
							replaceUrl: true,
              skipLocationChange: true,
              
						});
        
        })
        });
       
        
      
    },
      error=>{
        loading.dismiss();
        this.presentAlert();
      }         
    
    );
    
    
  
  

  
}



// 
// login(){
//   this.router.navigateByUrl('/app/tabs/tab2') ;
//   }
  
}
