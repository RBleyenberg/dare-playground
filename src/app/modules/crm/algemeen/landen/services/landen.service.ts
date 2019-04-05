import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Land } from '../interface/interface.land';

@Injectable({providedIn: 'root'})
export class LandenService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  get userId() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.uid;
    }
  }

  add(land: Land, userId: string) {
    const landen = this.db.list(`landen/${userId}`);
    return landen.push(land);
  }

  addLanden(landen: Land[]) {
    const userId = this.userId;

    if (userId) {
      landen.forEach( (land: Land) => {
        this.db.list(`landen/${userId}`).push(land);
      });
    }
  }

  get(userId: string) {
    return this.db.list(`landen/${userId}`).snapshotChanges();
  }

  update(land: Land, userId: string) {
    return of(this.db.object(`landen/${userId}/` + land.key)
      .update({
        id: land.id,
        code: land.code,
        naam: land.naam,
      }));
  }

  delete(land: Land, userId: string) {
    return this.db.object(`landen/${userId}/` + land.key).remove();
  }
}
