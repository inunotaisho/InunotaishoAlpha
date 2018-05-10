import { Injectable } from '@angular/core';



@Injectable()
export class LocalStorage {
    

    getItem (token: string){
        localStorage.getItem(token);
    }
    setItem(token: string, value: string){
        localStorage.setItem(token, value);
    }
    removeItem (token:string){
        localStorage.removeItem(token);
    }
}