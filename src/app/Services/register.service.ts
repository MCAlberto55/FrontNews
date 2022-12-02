import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private router: Router) { }
  register(email: string, password: string, nombre: string, apellido: string){
    console.log(email);
    console.log(password);
    console.log(nombre);
    console.log(apellido);
    this.router.navigate(['login']);
  }
}
