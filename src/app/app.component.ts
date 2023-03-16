import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';
import { AuthenticationInterface, AuthUpdate } from '../store/model/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  title = 'Angular15';

  text ='';

  //currentAuth = this.store.selectSnapshot(AuthState.getAuthObject);
  currentAuth: AuthenticationInterface[] = [];
  ngOnInit() {
    console.log(this.store.selectSnapshot(AuthState.getToken));
    console.log(this.store.selectSnapshot(AuthState.getAuthObject));

    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth.push(value);
      },
    });
  }

  updateAuthState() {
    this.store.dispatch(
      new AuthUpdate({
        //isAuth: true,
        //login: 'loginName',
        token: this.text,
      })
    );
  }

  resetAuthState() {
    this.store.dispatch(
      new AuthUpdate({
        //isAuth: false,
        //login: null,
        token: null,
      })
    );
  }
}
