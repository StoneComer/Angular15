import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

export interface productdata{
  id: string;
  title: string;
  price: string,
  image: string
}

export interface pers_info{
  id: string,
  firstName: string,
  lastName: string,
  image: string,
  age: string,
  ip: string,
  email: string
}

export interface userinfo{
  id: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private htpp: HttpClient) { }

  catalog: productdata[]=[];
  catalog_list: productdata[]=[];
  mains: productdata[]=[];
  user: userinfo = {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: ''
  }; 
  temp: pers_info={
    id: '',
    firstName: '',
    lastName: '',
    image: '',
    age: '',
    ip: '',
    email: ''
    };


  role: 'user' | 'admin' | 'guest' = 'guest';

  respon: any;
  getData = async ()=>{
    const response = await fetch('https://dummyjson.com/products');
    let context = await response.json();
    let k;
    let n:number = 0;
    
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
    n++;
    }
    this.mains = this.catalog.slice(0,10);
    this.catalog_list = this.catalog.slice(0,n);
  }

  log = async (login : string, password : string) =>{
    const response = fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: login,
      password: password,
      // expiresInMins: 60, // optional
    })
  })
  let context = await (await response).json();
  this.user.id = context.id;
  this.user.username = context.username;
  this.user.email = context.email;
  this.user.firstName = context.firstName;
  this.user.lastName = context.lastName;
  this.user.gender = context.gender;
  this.user.image = context.image;
  this.user.token = context.token;
  }
  //getInfo = async() =>{
    //const resp = await fetch('https://dummyjson.com/users/'+ this.user.id);
    //let res = await resp.json();
    //this.temp.id = res.id;
    //this.temp.firstName = res.firstName;
    //this.temp.lastName = res.lastName;
    //this.temp.image = res.image;
    //this.temp.age = res.age;
    //this.temp.ip = res.ip;
    //this.temp.email = res.email;
  //}
  resolve = async() => {
    return await fetch('https://dummyjson.com/users/'+ this.user.id);
 }
}

