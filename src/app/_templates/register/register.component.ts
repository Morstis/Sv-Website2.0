import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toArray, tap, mergeMap, map } from 'rxjs/internal/operators';

@Component({
  selector: 'mors-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient) {}
  classes$: Observable<any> = this.http
    // object that contains strings
    .get<string[]>(
      'https://api.opossum.media/public/mobileapps/hag/KlassenListe.php'
    )
    .pipe(
      mergeMap(x => Object.values(x)),
      toArray(),
      map(x => x.reverse())
    );
  register(formValue) {
    console.log(formValue);
  }

  ngOnInit(): void {}
}
