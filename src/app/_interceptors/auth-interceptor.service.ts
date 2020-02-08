import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        auth: this.auth.getJWT()
      }
    });

    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }
  handleResponse(req: HttpRequest<any>, e) {
    if (e instanceof HttpResponse) {
      console.log(e.headers);
      const jwt = e.headers.get('auth');
      console.log(jwt);

      this.auth.setJWT(req.headers.get('auth'));
      // console.log(this.auth.getJWT());

      // console.log(
      //   'Request for ',
      //   e.url,
      //   ' Response Status ',
      //   e.status,
      //   ' With body ',
      //   e.body
      // );
    }
  }

  handleError(req: HttpRequest<any>, e) {
    if (e.status === 401) {
      console.log('keine Rechte');
    }
  }
}
