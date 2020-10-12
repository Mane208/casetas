import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Router, NavigationExtras} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
user: any;
url: string;
token: any;
// headers = new HttpHeaders().set('seed-casetas', `Bearer ${this.token}`);
  constructor(private http:HttpClient,
    public router:Router) {
    
      this.url = 'https://apirest-casetas.herokuapp.com/';
      this.user = [];
     }
  
  async login(email, password){
    return this.http.post(this.url + 'login', {
      email,
      password
    }).subscribe(data =>{
      this.user = data;
      
      environment.tipo = this.user.user.tipo;
      environment.token = this.user.token;
      console.log(environment.tipo);
      console.log(environment.token);
      
      this.router.navigate(['btn-inicio/']);
    }, err =>{
      console.log(err);
    })
  
  }

   
}
