import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './Components/new/new.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { NewFormComponent } from './Components/new-form/new-form.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NewViewComponent } from './Components/new-view/new-view.component';
import { ListNewsComponent } from './Components/list-news/list-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    SearchBarComponent,
    HeaderComponent,
    LogInComponent,
    RegisterComponent,
    NewFormComponent,
    LandingComponent,
    NewViewComponent,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
