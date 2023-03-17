import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface productdata{
  id: string;
  title: string;
  price: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  catalog: productdata[]=[];
  mains: productdata[]=[];

  respon: any;
  getData = async ()=>{
    const response = await fetch('https://dummyjson.com/products');
    let context = await response.json();
    let k;
    
    for(k in context.products){
     let temp: productdata={
      id: '',
      title: '',
      price: '',
      image:''
    };
    temp.id=context.products[k].id;
    temp.title=context.products[k].title;
     temp.price=context.products[k].price;
     temp.image=context.products[k].thumbnail;
     this.catalog.push(temp); 
    }

    let i;
    for(i = 0; i<10;i++){
      this.mains.push(this.catalog[i])
    };
  }
}

