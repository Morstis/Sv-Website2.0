import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription, Subject } from 'rxjs';
import { User, AdditionUserInfo } from '../../shared/i/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, take, skip } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // Muss eine Behaivior sein. Und kann kein normales Subject sein.
  // Ref: https://stackoverflow.com/questions/60420547/user-login-logout-button-in-menu-angular-8-not-updating
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  subscription = new Subscription();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
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
      .pipe()
      .subscribe((user) => {
        this.user$.next(user);
      });
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      if (user.user.emailVerified) {
        return true;
      } else {
        throw {
          code: 'auth/not-verified',
          stack: new Error().stack,
        };
      }
    } catch (err) {
      throw err as Error;
    }
  }

  async register(
    email: string,
    password: string,
    additional: AdditionUserInfo
  ): Promise<boolean> {
    try {
      const authData = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.db
        .collection('user')
        .doc(authData.user.uid)
        .set({ ...new User(authData.user, additional) });
      await authData.user.sendEmailVerification();
      return true;
    } catch (err) {
      throw err as Error;
    }
  }

  async logout(): Promise<boolean> {
    try {
      await this.afAuth.signOut();
      this.router.navigateByUrl('/auth/login');

      return true;
    } catch (err) {
      throw err as Error;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
