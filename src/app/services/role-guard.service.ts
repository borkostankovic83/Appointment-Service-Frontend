import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{
  result: any;

  constructor(private currentUserService: CurrentUserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.currentUserService.getUserData().subscribe((result) => {
      this.result = result;
    });
 

    if (this.result.role == 'Admin') {
      return true;
    }
    else{
      // navigate to not found page
      this.router.navigate(['/404']);
      return false;
    }
    
  }
}
