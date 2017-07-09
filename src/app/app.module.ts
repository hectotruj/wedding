import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoryComponent } from './story/story.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  }, 
  {
    path: 'wedding',
    component: WeddingComponent,
    data: { title: 'Our Wedding' }
  },
  {
    path: 'story',
    component: StoryComponent,
    data: { title: 'Our Story' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WeddingComponent,
    StoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
