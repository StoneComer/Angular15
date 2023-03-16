import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { TODOUpdate, TODOstring } from './store/model/todo.model';
import { TODOState } from './store/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15';
  constructor(public store: Store){
  }

  text = null;

  updateTODOList(){
    this.store.dispatch(new TODOUpdate({
      todo: this.text,
    }));
    console.log(this.todocurrent);
  }

  //todocurrent = this.store.selectSnapshot(TODOState.getToken);
  todocurrent: TODOstring[] = []
  ngoninit(){
    this.store.select(TODOState.getToken).subscribe({
      next: (value) => {
        this.todocurrent.push(value);
      }
    });
    console.log(this.store.selectSnapshot(TODOState.getToken));
  }
}