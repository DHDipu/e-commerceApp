import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

  // tslint:disable-next-line: typedef
  login(){
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    const Provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(Provider);
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
     .pipe(switchMap(user => {
       if (user) {return this.userService.get(user.uid).valueChanges(); }

       return of (null);
     }));
  }
}
