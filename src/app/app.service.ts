import { Injectable } from '@angular/core';
import{Cookie} from 'ng2-cookies/ng2-cookies';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import{HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url='https://chatapi.edwisor.com';

  constructor(public http:HttpClient) { }

  public signupFunction(data) : Observable<any>
  {
    const params= new HttpParams()
      .set('firstName',data.firstName)
      .set('lastName',data.lastName)
      .set('email',data.email)
      .set('password',data.password)
      .set('apiKey',data.apiKey)
      .set('mobile',data.mobile);

   return this.http.post(`${this.url}/api/v1/users/signup`,params);
  }

  public signinFunction(data):Observable<any>{
    const params= new HttpParams()
    .set('email',data.email)
    .set('password',data.password);

return this.http.post(`${this.url}/api/v1/users/login`,params);
  }

  /**
   * getuserInfo
   * 
   */
  public getUserInfoFromLocalstorage = ()=> {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfoInLocalStorage = (data) =>{
    localStorage.setItem('userInfo',JSON.stringify(data));
  }
}
