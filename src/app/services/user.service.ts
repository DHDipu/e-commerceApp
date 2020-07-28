import { AppUser } from './../models/app-user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {}

  // tslint:disable-next-line: typedef
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser>{
    return this.db.object('/users/' + uid);
  }
}
