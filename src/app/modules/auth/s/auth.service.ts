import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { User, AdditionUserInfo } from '../../shared/i/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  subscription = new Subscription();

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.subscription = this.afAuth.authState
      .pipe(
        switchMap((auth) => {
          if (auth) {
            return this.db
              .collection<User[]>('user')
              .doc<User>(auth.uid)
              .valueChanges();
          } else {
            return of(null);
          }
        })
      )
      .subscribe((user) => {
        this.user.next(user);
      });
  }

  async login(email: string, password: string): Promise<boolean | Error> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      return new Error(error);
    }
  }

  async register(
    email: string,
    password: string,
    additional: AdditionUserInfo
  ): Promise<boolean | Error> {
    try {
      const authData = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.db
        .collection('user')
        .doc(authData.user.uid)
        .set({ ...new User(authData.user, additional) });
      return true;
    } catch (error) {
      return new Error(error);
    }
  }

  async signOut(): Promise<boolean | Error> {
    try {
      await this.afAuth.signOut();
      return true;
    } catch (err) {
      return new Error(err);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
