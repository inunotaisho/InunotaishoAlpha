import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './app/app.component';
import { ServerTransferStateModule } from '@angular/platform-server';

import { ServerPrebootModule } from 'preboot/server';

import {AuthGuard} from '../src/services/authguard/authguard.service';
import { AuthService } from './services/authservice/authentication.service';
import { LocalStorage } from './services/authservice/localstorage.service';


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        // Our Common AppModule
        AppModuleShared,

        ServerModule,
        ServerPrebootModule.recordEvents({ appRoot: 'app-root' }),
        NoopAnimationsModule

        // HttpTransferCacheModule still needs fixes for 5.0
    //   Leave this commented out for now, as it breaks Server-renders
    //   Looking into fixes for this! - @MarkPieszak
    // ServerTransferStateModule // <-- broken for the time-being with ASP.NET
    ],
    providers : [
        AuthService,
        AuthGuard,
        {
            provide: 'LocalStorage', 
            useFactory: () => (typeof window !== "undefined") ? window.localStorage : {}
        }
    ]
})
export class AppModule {
    constructor() {}
}
