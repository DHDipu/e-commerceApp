import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  login(){
    this.authService.login();
  }

}
