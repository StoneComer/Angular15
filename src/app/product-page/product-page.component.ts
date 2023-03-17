import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface item{

  title:string;
  price:string;
  description:string;
  rating:string;
  brand:string;
  image: string;

}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  constructor(private activateroute: ActivatedRoute, private location: Location){}

  id: any;

  temp: item={
    title: '',
    price: '',
    image:'',
    description: '',
    rating: '',
    brand: ''
  };

  ngOnInit(): void{
    this.activateroute.queryParams.subscribe(data =>{
      this.id = data['id'];
      console.log(this.id);
      this.getData()
    })
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

  back(): void{
    this.location.back();
  }
}