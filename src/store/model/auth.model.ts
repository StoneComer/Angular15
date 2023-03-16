export interface UserInterface {
    name: string | null;
    age: number | null;
  }
  
  export interface AuthenticationInterface {
    //login: string | null;
    token: string | null;
    //isAuth: boolean;
  }
  
  export class UserUpdate {
    static readonly type = '[User]: User Update';
    constructor(public payload: UserInterface) {}
  }
  
  export class AuthUpdate {
    static readonly type = '[Auth]: Auth Update';
    constructor(public payload: AuthenticationInterface) {}
  }