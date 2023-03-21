import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';

export interface item{

  title:string;
  price:string;
  description:string;
  rating:string;
  brand:string;
  image: string;

}

@Component({
  selector: 'app-admin-products-edit',
  templateUrl: './admin-products-edit.component.html',
  styleUrls: ['./admin-products-edit.component.css']
})
export class AdminProductsEditComponent {
  constructor(private activateroute: ActivatedRoute, private location: Location, private router: Router,private appcomponent: AppComponent, private dataservice: DataService){}
  id: any;

  temp: item={
    title: '',
    price: '',
    image:'',
    description: '',
    rating: '',
    brand: ''
  };

  current_item: item = this.temp;

  ngOnInit(): void{
    this.activateroute.queryParams.subscribe(data =>{
      this.id = data['id'];
      console.log(this.id);
      this.getData();
    });
    if(this.dataservice.role != 'guest'){
      this.appcomponent.visibility = true;
      this.appcomponent.visibility_logged = false;
    }
    else{
      this.appcomponent.visibility = false;
      this.appcomponent.visibility_logged = true;
    }
  };
  getData = async() =>{
    const resp = await fetch('https://dummyjson.com/products/'+this.id);

    let res = await resp.json();
    

    this.temp.title = res.title;
    this.temp.price = res.price;
    this.temp.image = res.thumbnail;
    this.temp.description= res.description;
    this.temp.rating = res.rating;
    this.temp.brand = res.brand;
    console.log(this.temp)
  }

  editData = async ()=>{
    let resp = await fetch('https://dummyjson.com/products/'+this.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.current_item.title,
            price: this.current_item.price,
            thumbnail: this.current_item.image,
            description: this.current_item.description,
            rating: this.current_item.rating,
            brand: this.current_item.brand
          })
        });
        
        if (resp.ok) { 
          this.location.back();
      } else {
          alert("Ошибка HTTP: " + resp.status);
      }
  }

  back(): void{
    this.location.back();
  }
}
