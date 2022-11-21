import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SesnopGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('sesnop')){
        this.router.navigate(['/inicio'])
        return true;
      }
      else{
        if(localStorage.getItem('ingresalu')){
          this.router.navigate(['/alumno'])
          return false;
        }
        if(localStorage.getItem('ingresapro')){
          this.router.navigate(['/inicio-inicio'])
          return false;
        }
      } 
      
  }
  
}
