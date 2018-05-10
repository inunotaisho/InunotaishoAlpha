import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './app/app.component';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserPrebootModule } from 'preboot/browser';

import {AuthGuard} from '../src/services/authguard/authguard.service';
import { AuthService } from './services/authservice/authentication.service';
import { LocalStorage } from './services/authservice/localstorage.service';

export function getOriginUrl() {
    return window.location.origin;
  }
  
  export function getRequest() {
    // the Request object only lives on the server
    return { cookie: document.cookie };
  }

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserPrebootModule.replayEvents(),
        BrowserAnimationsModule,

        // Our Common AppModule
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        {
            // The server provides these in main.server
            provide: REQUEST,
            useFactory: (getRequest)
        },
        AuthService,
        AuthGuard,
        {
            provide: 'LocalStorage', 
            useFactory: () => (typeof window !== "undefined") ? window.localStorage : {}
        }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
