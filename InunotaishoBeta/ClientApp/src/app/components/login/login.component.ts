import { HttpClient } from '@angular/common/http';
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../services/authservice/authentication.service';
import { loginModel } from '../../../models/login.model'
import {Router} from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
})

export class LoginComponent implements OnDestroy, OnInit{
    constructor(private http: HttpClient, private authService:AuthService, private router:Router, private login: Subscription, private LoginModel:loginModel) { 


    }

    @Input() user:loginModel;
    
    loginUser = () => {
        console.log('function called');
        let login = this.authService.login(this.user).subscribe((data:any)=> {
                console.log(data);
                this.authService.setIsLoggedIn(data['token']);
                this.router.navigate(['/']);
        }, err => { 
            console.log(err);
            console.log('user not logged in');
        })
    }
    ngOnDestroy(){
        if (this.login != undefined){
            this.login.unsubscribe();
        }
    }
    ngOnInit():void{
        this.user = new loginModel();
    }
}