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
    this.currentUserSubject = new BehaviorSubject<UserInterface>(null);
  }

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
  }
}
