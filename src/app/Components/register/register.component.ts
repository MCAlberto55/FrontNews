import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerService: RegisterService){}
  register(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const lastName = form.value.lastName;

    this.registerService.register(email, password, name, lastName);
  }
}
