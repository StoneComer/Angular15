import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataservice: DataService, private router: Router, private appcomponent: AppComponent, private profile: ProfileComponent){}

  visibility: boolean = true;

  admin_list = {
    login: 'hbingley1',
    password: 'CQutx25i8r'
  };
  user_list = {
    login:"atuny0",
    password: '9uQFF1Lh'
  };

  ngoninit(){
    console.log(localStorage.getItem('id'));
  }

  login: string = '';
  password: string = '';
  delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));

  log_in(login:string, password: string){
    if (this.login == this.user_list.login && this.password == this.user_list.password){
      this.visibility = true;
      this.dataservice.log(login, password);
      this.dataservice.role = 'user';
      this.delay(1000).then(()=> this.router.navigate(['/profile']));
      this.appcomponent.visibility_logged = false;
      this.appcomponent.visibility = true;
      this.appcomponent.visibility_admin = true;
    }
    else if (this.login == this.admin_list.login && this.password == this.admin_list.password){
      this.visibility = true;
      this.dataservice.log(login, password);
      this.dataservice.role = 'admin';
      this.delay(1000).then(()=> this.router.navigate(['/profile']));
      this.appcomponent.visibility_logged = false;
      this.appcomponent.visibility = true;
      this.appcomponent.visibility_admin = false;
      }
      
    else {
      this.visibility = false;
    }
  }
}
