import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home-cmp',
  templateUrl: 'home.html'
})
export class HomeComponent { 
  name = 'HomeComponent'; 
  student = 'Student';
  accommodator ='Accommodator';
  starthere = 'Start Here';
  signup ='SignUp';
  login ='Login';
  needrooms ='Need Rooms ??';
  needroommates ='Need Roommates ??';
  haveaccount ='Already Have an Account ??';
}