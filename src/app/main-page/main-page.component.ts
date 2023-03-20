import { Component, OnInit } from '@angular/core';
import { DataService, productdata } from '../data.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(public getdata: DataService, private router: Router, private appcomponent: AppComponent){}

  ngOnInit():void {
  this.getdata.getData();
  if(this.getdata.role != 'guest'){
    this.appcomponent.visibility = true;
    this.appcomponent.visibility_logged = false;
  }
  else{
    this.appcomponent.visibility = false;
    this.appcomponent.visibility_logged = true;
  }
  }

  open(id:string){
    this.router.navigate(['/catalog/',id], {
      queryParams: {
        id: id
      },
    });
  }
}
