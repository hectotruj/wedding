import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { LoginComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoryComponent } from './story/story.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import { RegistryComponent } from './registry/registry.component';


const appRoutes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'wedding',
    canActivate: [AuthGuard],
    component: WeddingComponent,
    data: { title: 'Our Wedding' }
  },
  {
    path: 'story',
    canActivate: [AuthGuard],
    component: StoryComponent,
    data: { title: 'Our Story' }
  },
  {
    path: 'registry',
    canActivate: [AuthGuard],
    component: RegistryComponent,
    data: { title: 'Our Registry' }
  }
  ,
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    canActivate: [AuthGuard],
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WeddingComponent,
    StoryComponent,
    FooterComponent,
    LoginComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
