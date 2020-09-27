import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
   url="https://my-json-server.typicode.com/typicode/demo/posts"
  constructor(private http:HttpClient) { }
  getPosts()
  {
    return this.http.get(this.url);
  }
}
