import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = true;
  constructor(private router: Router, private http: HttpClient) {
    // on route change to '/login', set the variable header to false
    this.router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        // ignoring query parameters e.g /verify?email&uid
        const UrlSegment: string[] = event.url.split('?');
        if (
          UrlSegment[0] === '/login' ||
          UrlSegment[0] === '/register' ||
          UrlSegment[0] === '/verify'
        ) {
          this.header = false;
        } else {
          this.header = true;
        }
      }
    });

    this.http
      .get('http://localhost:3000/user')
      .pipe(tap(x => console.log(x)))
      .subscribe();
  }
}
