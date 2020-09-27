import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public domainUrl:string = "https://acculegal-erp.area51.etherealwork.net";

  public apiUrl:string = this.domainUrl.concat("/api/v1"); 
  
  constructor(
    private storage: Storage,
  ) { }

  //
  getUrl(ctx) {
    return this.apiUrl.concat(ctx);
  }

  //
  getAppSpecificPage(pageName) {
    let systemUrl = {
      'PRIVACY_POLICY': this.getUrl('/toc'),
      'CREATE_ACCOUNT': this.getUrl('/create-account'),
      'PAYMENT': this.domainUrl.concat('/api/payment/success'),
      'PAYMENT_INIT': this.domainUrl.concat('/api/payment/init'),
      'SUBSCRIPTIONS': this.apiUrl.concat('/subscriptions'),
    };

    return systemUrl[pageName];
  }

  //
  async getBearerToken() {
    const storage = this.storage;
    return new Promise(function (resolve, reject) {
      storage.get('user').then((user) => {
        if (user) {
          resolve(user['token']);
        }
      });
    });
  }

  //
  async getUser() {
    const storage = this.storage;
    return new Promise(function (resolve, reject) {
      storage.get('user').then((user) => {
        if (user) {
          resolve (user);
        }
      });
    });
  }

}