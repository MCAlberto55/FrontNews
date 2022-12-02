import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router: Router) { }
  login(email: string, password: string){
    console.log(email);
    console.log(password);
    this.router.navigate(['newsList']);
  }
}
