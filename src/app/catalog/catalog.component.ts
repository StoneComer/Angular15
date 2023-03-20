import { Component, OnInit } from '@angular/core';
import { DataService, productdata } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  constructor(public getdata: DataService, private router: Router, public appcomponent: AppComponent){}

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
