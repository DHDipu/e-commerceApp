import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser: AppUser;
  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  // tslint:disable-next-line: typedef
  logout(){
  this.authService.logout();
  }
}
