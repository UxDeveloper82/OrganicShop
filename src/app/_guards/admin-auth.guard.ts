import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthService } from '../_services/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: User) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.switchMap(user => this.userService.get(user.uid)).map(appUser => appUser.isAdmin);
  }
}

