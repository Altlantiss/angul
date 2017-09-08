import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SpeakService{
  speak(word) {
    console.log(`说了${word}`);
  }
  constructor(
    private http: Http
  ){ }
  private extraData(res) {
      let body = res.json();
      return body || [];
  }
  private handleError(error) {
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : `Server error`;
      console.log(errMsg);
      if(error.status == 302) {
        // alert('权限不足，请用管理员账户登录!');
        // location.href = '/admin';
      }
      return Observable.throw(errMsg);
  }

  getCategories(): Observable<any> {
      let url = `http://localhost:3000/api/plus`;
      return this.http.get(url)
        .map(this.extraData)
        .catch(this.handleError);
  }
}
