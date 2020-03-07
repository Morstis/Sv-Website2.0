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
import { tap, map, catchError } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { ApiResponse } from '../_interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}
  private exclutionRoutes: string[] = ['/register', '/verify', '/login'];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.auth.currentUserValue() &&
      !this.exclutionRoutes.includes(this.router.url)
    ) {
      req = req.clone({
        setHeaders: {
          auth: this.auth.getJWT()
        }
      });
    }

    return next.handle(req).pipe(
      catchError(err => this.handleError(req, err)),

      tap((e: HttpEvent<any>) => this.handleResponse(req, e))
    );
  }

  handleResponse(req: HttpRequest<any>, e) {
    if (e instanceof HttpResponse) {
      if (e.body instanceof Object && e.body.hasOwnProperty('res')) {
        const body: ApiResponse = e.body;
        if (body.res === false) {
          console.log(
            `%cApi Response Error: %c${body.error} %cDescription: %c${body.description}`,
            'color: orange',
            'color: black',
            'color: orange',
            'color: black'
          );
        }
      }

      if (e.headers.get('auth') !== null) {
        this.auth.setJWT(e.headers.get('auth'));
      }
    }
  }
  handleError(req: HttpRequest<any>, e) {
    if (e.status === 401) {
      this.auth.logout();
      return;
    }

    return throwError(e);
  }
}
