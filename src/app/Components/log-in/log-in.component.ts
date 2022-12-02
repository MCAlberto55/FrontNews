import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private loginService: LoginServiceService){}

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email, password);
  }
}
