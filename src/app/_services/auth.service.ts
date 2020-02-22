import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../_interfaces/login-data';
import { ApiResponse } from '../_interfaces/api-response';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_config';
import { CookieService } from 'ngx-cookie-service';
import { RegisterData } from '../_interfaces/register-data';
import { UserInterface } from '../_interfaces/user-interface';
import { User } from '../_classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(logindata: LoginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + 'auth/login', logindata);
  }
  register(registerData: RegisterData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      BASE_URL + 'auth/register',
      registerData
    );
  }

  verify(params): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + 'auth/verify', params);
  }

  setJWT(token: string): void {
    this.cookie.set('token', token);
  }

  getJWT(): string {
    return this.cookie.get('token');
  }

  getUserFromJwt(): UserInterface {
    /* Für ein dynamischeres System bin ich zu dumm. Idee war:
      export class User implements UserInterface {
        ...
        constructor(...a) {
          if(a instanceof object) {
            for(const key in a) {
              if(this.hasOwnProperty(key)) {
                this[key] = a[key];
              }
            }
          }
        }
      }

      return new User(...user);
      Funktieriert aber nicht
    */
    // Referenz: https://medium.com/@ddevinda/decode-jwt-token-6c75fa9aba6f und https://jwt.io/
    const user: UserInterface = JSON.parse(
      window.atob(this.getJWT().split('.')[1])
    );
    return new User(
      user.id,
      user.vorname,
      user.nachname,
      user.klasse,
      user.email,
      user.role
    );
  }
}
