import { Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { EdComponent } from '../app/components/education/ed.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';
import { BlogComponent } from '../app/components/blog/blog.component';
import { BlogPostComponent } from '../app/components/blogpost/blogpost.component';
import { LoginComponent }from '../app/components/login/login.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { WriteComponent } from '../app/components/write/write.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { RegComponent } from '../app/components/reg/reg.component';
import portImgContainer from '../app/components/portfolio/images/portfolio.image.component';
import FroalaEditor from '../app/components/write/froala-editor/froala.component';

import { AuthGuard } from "../services/authguard/authguard.service"


export const routes: Routes = [
    {path:'', pathMatch:'full', component:HomeComponent},
    {path:'education', component:EdComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'blog', component:BlogComponent},
    {path:'login', component: LoginComponent},
    {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path:'write', component: WriteComponent, canActivate: [AuthGuard]},
    {path:'contact', component: ContactComponent},
    {path:'reg', component: RegComponent},
    {path:'blogPost', component: BlogPostComponent},
    { path: '**', redirectTo: '' }
   ]