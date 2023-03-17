import { Component, OnInit } from '@angular/core';
import { DataService, productdata } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(public getdata: DataService, private router: Router){}

  ngOnInit():void {
    this.getdata.getData();
  }

  open(id:string){
    this.router.navigate(['/catalog/',id], {
      queryParams: {
        id: id
      },
    });
  }
}
