import { Component } from '@angular/core';
import { LoginForm } from './login.form';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})
export class LoginComponent { 
  user = new LoginForm('','');
  submitted = false;
  
  name = 'select';
  onSubmit(value : any){
    console.log(value);
  }
}