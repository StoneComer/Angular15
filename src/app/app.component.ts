import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { TODOUpdate } from './store/model/todo.model';
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

  todocurrent = this.store.selectSnapshot(TODOState.getToken);

  text = '';

  ngoninit(){
    this.store.select(TODOState.getToken).subscribe({
      next: (value) => {
        this.todocurrent = value;
      }
    })
  }

  updateTODOList(){
    this.store.dispatch(new TODOUpdate({
      todo: this.text
    }))
  }
}

