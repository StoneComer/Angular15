import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(public dataservice: DataService, private router: Router, public appcomponent: AppComponent){}

  ngOnInit():void {
this.dataservice.getData();
}
open(id: string){
  this.router.navigate(['/admin/items/',id], {
    queryParams: {
      id: id
    },
  });
}
}
