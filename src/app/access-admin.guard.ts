import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Data, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminGuard implements CanActivate {
  constructor(private dataservice: DataService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.dataservice.role=="admin"){
      return true;
    }
    else{
      return this.router.navigateByUrl('/auth');
    }
  }
  
}
