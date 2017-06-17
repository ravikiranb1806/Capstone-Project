import { Component } from '@angular/core';
import { SignupForm } from './signup.form';
import { UsersService } from '../services/users.service';


@Component({
  moduleId: module.id,
  selector: 'signup-cmp',
  templateUrl: 'signup.html'
})
export class SignupComponent { 
 
  user = new SignupForm('','','','','','','','','');
  submitted = false;
 
  constructor(private usersService: UsersService){}

  onSubmit(value: any){
    this.submitted = true;  
    console.log(value);
    this.usersService.adduser(value).subscribe(data => {
      console.log(data);
    });    
  }
}