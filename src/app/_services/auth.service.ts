import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../_interfaces/login-data';
import { ApiResponse } from '../_interfaces/api-response';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(logindata: LoginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + 'auth/login', logindata);
  }

  setJWT(token: string): void {
    this.cookie.set('token', token);
  }

  getJWT(): string {
    return this.cookie.get('token');
  }
}
