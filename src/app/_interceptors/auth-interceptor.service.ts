import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map } from 'rxjs/internal/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.router.url !== '/register') {
      req = req.clone({
        setHeaders: {
          auth: this.auth.getJWT()
        }
      });
    }

    return next.handle(req).pipe(
      tap(
        (e: HttpEvent<any>) => this.handleResponse(req, e),
        (err: HttpErrorResponse) => this.handleError(req, err)
      )
    );
  }

  handleResponse(req: HttpRequest<any>, e) {
    if (e instanceof HttpResponse) {
      if (e.headers.get('auth') !== null) {
        this.auth.setJWT(e.headers.get('auth'));
      }
    }
  }

  handleError(req: HttpRequest<any>, e) {
    if (e.status === 401) {
      console.log('keine Rechte');
    } else {
      return throwError(e);
    }
  }
}
