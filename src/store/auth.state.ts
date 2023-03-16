import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthenticationInterface, AuthUpdate } from './model/auth.model';

@State<AuthenticationInterface>({
  name: 'AuthState',
  defaults: {
    //isAuth: false,
    //login: null,
    token: null,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static getToken(state: AuthenticationInterface) {
    return state.token;
  }
  @Selector()
  static getAuthObject(state: AuthenticationInterface) {
    return state;
  }
  @Action(AuthUpdate)
  updateUserModel(
    ctx: StateContext<AuthenticationInterface>,
    action: AuthUpdate
  ) {
    ctx.patchState({
      //isAuth: action.payload.isAuth,
      //login: action.payload.login,
      token: action.payload.token,
    });
  }
}
