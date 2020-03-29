import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Router } from '@angular/router';
import { LsService } from '../../service/ls.service';
import { stat } from 'fs';

@Injectable()
export class CanActivateAuthenticateGuard implements CanActivate {

  routes = ['/', '/register', '/verification'];

  constructor(
    private lsService: LsService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isUnprotectedRoute = false;
    if (state.url.match('verification') || this.routes.indexOf(state.url) !== -1) {
      isUnprotectedRoute = true;
    }
    if (this.lsService.getValue('isLoggedIn') && isUnprotectedRoute) {
      this.router.navigate(['/tasks/inbox']);
    } else if (this.lsService.getValue('isLoggedIn') && !isUnprotectedRoute) {
      return true;
    } else if (!this.lsService.getValue('isLoggedIn') && !isUnprotectedRoute) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
