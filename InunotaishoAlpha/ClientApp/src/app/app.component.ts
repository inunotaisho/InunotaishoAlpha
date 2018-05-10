import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation, RendererFactory2, PLATFORM_ID, Injector } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Meta, Title, DOCUMENT, MetaDefinition } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { isPlatformServer } from '@angular/common';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
}
