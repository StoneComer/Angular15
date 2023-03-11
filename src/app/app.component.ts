import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15';
  constructor(private dataService: DataService){}

  users: object[] = []
  
  getUsers(){
    this.dataService.getUsers().subscribe({
      next: (resp: any) =>{
        this.users = resp;
        console.log(resp)
      },
      error: (err: HttpErrorResponse) =>{}
    })
  }
}
