import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListNewsComponent} from '../app/Components/list-news/list-news.component'
import {LandingComponent} from '../app/Components/landing/landing.component'
import {LogInComponent} from '../app/Components//log-in/log-in.component'
import {RegisterComponent} from '../app/Components/register/register.component'
import {NewFormComponent} from '../app/Components/new-form/new-form.component'
import { ListNewsSearchComponent } from './Components/list-news-search/list-news-search.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newsList', component: ListNewsComponent },
  { path: 'generateNew', component: NewFormComponent },
  { path: 'newsListSearch', component: ListNewsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
