import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comments2',
  templateUrl: './comments2.component.html',
  styleUrls: ['./comments2.component.css']
})
export class Comments2Component {
  constructor(public dataService:DataService){}
  comment2 = {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
}
