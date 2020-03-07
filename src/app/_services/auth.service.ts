import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../_interfaces/login-data';
import { ApiResponse } from '../_interfaces/api-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { RegisterData } from '../_interfaces/register-data';
import { UserInterface } from '../_interfaces/user-interface';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserInterface>;
  constructor(private http: HttpClient, private router: Router) {
    /* Versucht sich den User token im local Storage zu holen. Parst ihn. Ref: https://jwt.io/ und versucht den User
       auf das BehaviorSubject zu "schicken"
    */
    try {
      const user: { iat: string; exp: string } & UserInterface = JSON.parse(
        window.atob(this.getJWT().split('.')[1])
      );
      delete user.iat;
      delete user.exp;
      this.currentUserSubject = new BehaviorSubject<UserInterface>(user);
    } catch (err) {
      // Schickt ansonsten null
      try {
        this.currentUserSubject = new BehaviorSubject<UserInterface>(null);
      } catch (err) {
        // hat bei allem ein Error seht unwahrscheinlich bis hin zu unmöglich
        throw Error(
          'Error after user reading from local storage and after set null escape'
        );
      }
    }
  }

  // Setter und Getter sind an der Stelle für mich subjektiv gesehen hässlicher
  currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
  }
  setCurrentUser(user: UserInterface): void {
    this.currentUserSubject.next(user);
  }

  login(loginData: LoginData): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(environment.APIURL + 'auth/login', loginData)
      .pipe(take(1));
  }
  register(registerData: RegisterData): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(environment.APIURL + 'auth/register', registerData)
      .pipe(take(1));
  }
  verify(params): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(environment.APIURL + 'auth/verify', params)
      .pipe(take(1));
  }

  setJWT(token: string): void {
    localStorage.setItem('token', token);
  }

  getJWT(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.currentUserValue() !== null ? true : false;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.setCurrentUser(null);
    this.router.navigateByUrl('/login');
    console.log('%cLOGOUT!!', 'color: orange');
  }
}
