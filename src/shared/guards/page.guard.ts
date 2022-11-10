import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var activeRole = localStorage.getItem('role');
      console.log('page-role', route.data['role']);
     

      // aktif role route dosyasında sayfaya tanımlanan page role eşit ise devam 
     if(activeRole?.includes(route.data['role'])){
      return true;
     }
     else {
      return false;
     }

  }
  
}
