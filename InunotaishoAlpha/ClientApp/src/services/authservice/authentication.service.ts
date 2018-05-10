import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { loginModel } from '../../models/login.model';
import {LocalStorage} from './localstorage.service';

@Injectable()
export class AuthService {
    
     isLoggedIn = false;

     constructor(private http:HttpClient, private local: LocalStorage){
         const token = this.local.getItem('token')
         if(token){
             this.isLoggedIn = true
         }
     }

    setIsLoggedIn = (token: string) => {
        this.isLoggedIn = true;
        this.local.setItem('token', token);
    }
    getIsLoggedIn() {
        return this.isLoggedIn
    }
    login(user:loginModel){
        return this.http.post('/users/login', user);
    }
    logout(){
        this.local.removeItem('token')
        this.isLoggedIn = false
    }

}