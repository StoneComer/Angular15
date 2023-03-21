import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15';

  constructor(public dataservice:DataService) {}

  visibility: boolean = false;
  visibility_logged: boolean = true;

  NgOnInit():void{
    if(this.dataservice.role != 'guest'){
      this.visibility = true;
      this.visibility_logged = false;
    }
    else{
      this.visibility = false;
      this.visibility_logged = true;
    }
  }

  exit(){
    this.dataservice.role = 'guest';
  }
}
