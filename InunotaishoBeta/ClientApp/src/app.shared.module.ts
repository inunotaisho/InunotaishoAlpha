import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app/app.component';
import { routes } from "./routes/routes.module";
import { Navbar} from './app/components/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { EdComponent } from './app/components/education/ed.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { BlogComponent } from './app/components/blog/blog.component';
import { BlogPostComponent } from './app/components/blogpost/blogpost.component';
import { LoginComponent }from './app/components/login/login.component';
import { ProfileComponent } from './app/components/profile/profile.component';
import { WriteComponent } from './app/components/write/write.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { RegComponent } from './app/components/reg/reg.component';
import portImgContainer from './app/components/portfolio/images/portfolio.image.component';
import FroalaEditor from './app/components/write/froala-editor/froala.component';


export function declarations(): any {
    return [
        AppComponent,
        BlogComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        FroalaEditor,
        HomeComponent,
        LoginComponent,
        Navbar,
        ProfileComponent,
        PortfolioComponent,
        portImgContainer,
        RegComponent,
        WriteComponent
    ]
}

@NgModule({
    declarations: [
        AppComponent,
        declarations()
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        TooltipModule.forRoot(),
        CollapseModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ]
})
export class AppModuleShared {
}
