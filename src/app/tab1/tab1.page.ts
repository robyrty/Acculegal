import { Component } from '@angular/core';
import{ OnInit} from '@angular/core'
import { FakeApiService } from '../fake-api.service';
import {NavController, NavParams} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any
  result:any
  final:any
  user1:any
    constructor(private posts:FakeApiService,
  
    public http:HttpClient) {

  }
  ngOnInit(){
  //  this.posts.getPosts().subscribe((result)=>{console.warn('result')
  // this.data=result})
  // var url = 'https://acculegal-erp.area51.etherealwork.net /api/v1/auth/login';
  // this.user1 = this.http.get(url + this.navParams.get('user'));
  // this.data.map(res => res.json())
  // .subscribe(user1 => {
  // this.final=user1.name;
  // console.log(this.final)
  // });
  }

}
