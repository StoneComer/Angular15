import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

export interface pers_info{
  id: string,
  firstName: string,
  lastName: string,
  image: string,
  age: string,
  ip: string,
  email: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public dataservice:DataService, private location:Location, private activateroute: ActivatedRoute){}
  
  id: any;

  ngOnInit(){
      this.id = this.dataservice.user.id;
      console.log(this.id);
      this.getInfo();
      console.log(this.temp)
  }

  temp: pers_info={
    id: '',
    firstName: '',
    lastName: '',
    image: '',
    age: '',
    ip: '',
    email: ''
    };

  getInfo = async() =>{
    const resp = await fetch('https://dummyjson.com/users/'+ this.id);
    let res = await resp.json();
    this.temp.id = res.id;
    this.temp.firstName = res.firstName;
    this.temp.lastName = res.lastName;
    this.temp.image = res.image;
    this.temp.age = res.age;
    this.temp.ip = res.ip;
    this.temp.email = res.email;
  }
}
