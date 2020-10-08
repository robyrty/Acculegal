import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { Storage } from '@ionic/storage';
import { Tab4Page } from './tab4/tab4.page';
import { Tab2Page } from './tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
constructor(private router:Router,public storage:Storage){

}
boolena:boolean;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;

    this.storage.get('user').then((val)=>{
      console.log('tokenisuser is',val.success);
    this.boolena=val.success;});
       
    if (!this.boolena){
      this.router.navigate([Tab4Page])
    }
    this.router.navigate([Tab2Page])
  }
  
}
