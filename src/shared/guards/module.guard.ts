import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// CanLoad ile module load olurken araya giren bir servistir.

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {


  constructor(private router:Router) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     var activeRole = localStorage.getItem('role');
      console.log('activeRole', activeRole);
     

     if(activeRole == 'cms-manager'){
      return true;
     }
     else {
      this.router.navigateByUrl('unauthorize');
      return false;
     }
      


  }
}
