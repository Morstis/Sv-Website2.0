import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(err: Error) {
    const router = this.injector.get(Router);
    console.error(
      'Error is registered:',
      err,
      err.stack || 'no stack',
      'URL:',
      router.url
    );

    if (err instanceof HttpErrorResponse) {
      console.log('Server response failed');

      switch (err.status) {
        case 401:
          console.log('Unauthorized, do not log');
          break;
        case 403:
          console.log('Rule required no not log');
          break;
        case 404:
          console.error('Source not found:', err);
          break;
        case 400 || 405 || 410:
          console.error('Error im Code', err);
          break;
        default:
          if (400 <= err.status && err.status <= 499) {
            console.error('Client Error', err);
            break;
          }
          if (500 <= err.status && err.status <= 511) {
            console.error('Server Error', err);
            break;
          }
          console.error('Unerwarteter Fehler:', err);
          break;
      }
    } else {
      console.error('Client Error:', err);
    }
  }
}
