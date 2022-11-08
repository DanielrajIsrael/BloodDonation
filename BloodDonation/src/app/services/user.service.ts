import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/";

  getAllData() {
    return this.http.get(this.baseUrl + "getAllusers")
  }

  dataLogin: any;
  login(email: any, password: any) {
    return this.http.post(this.baseUrl + "login/" + email + "/" + password, this.dataLogin);
  }

  sentAllRequest(notify: any) {
    return this.http.post(this.baseUrl + "saveRequest", notify);
  }

  allRequest() {
    return this.http.get(this.baseUrl + "getRequest");
  }

  requestResponse(request: any, id: any) {
    return this.http.put(this.baseUrl + "updateRequest/" + id, request);
  }

  register(userData: any) {
    return this.http.post(this.baseUrl + "saveUsers", userData)
  }

  user: any;
  userDetails: any;
  localStorage() {
    this.user = localStorage.getItem('user');
    if(this.user!=''){
    return this.userDetails = JSON.parse(this.user);
    }else{
      return null;
    }
  }

  public setToken(token:any) {
    localStorage.setItem('token', token);
    return true;
  }

  
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
      return tokenStr;
    }
  
  public getDecodedAccessToken(token: string){
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
