import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15';

  constructor(public dataservice:DataService, private router: Router) {}

  visibility: boolean = false;
  visibility_logged: boolean = true;
  visibility_admin: boolean = true;

  NgOnInit():void{
    let role = this.dataservice.role;
    if(this.dataservice.role == 'admin'){
        this.visibility_admin = false;
    }else{
      this.visibility_admin = false;
    }
    if(this.dataservice.role != 'guest'){
      this.visibility = true;
      this.visibility_logged = false;
    }
    else {
      this.visibility = false;
      this.visibility_logged = true;
      this.visibility_admin = true;
    }
  }

  exit(){
    this.dataservice.role = 'guest';
    location.reload();
  }
}
