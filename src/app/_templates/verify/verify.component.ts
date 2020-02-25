import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { switchMap, take } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/_interfaces/api-response';
import { VerifyMessage } from 'src/app/_interfaces/verify-message';

@Component({
  selector: 'mors-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  message: VerifyMessage = {} as VerifyMessage;

  /* Holt sich die Parameter der Url. e.g. http://localhost:4200/verify?uid=string?email=string
    und übergibt diese dem verify stream.
    switchMap Referenz: https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
  */
  verify$: Observable<ApiResponse> = this.route.queryParams.pipe(
    switchMap(params => {
      return this.auth.verify(params);
    })
  );

  ngOnInit(): void {
    this.verify$.pipe(take(1)).subscribe((res: ApiResponse) => {
      this.message.head = res.res
        ? 'Du wurdes erfolgreich verifiziert.'
        : 'Etwas ist schief gelaufen! Bitte versuche folgendes';
      this.message.error = res.error ? res.error : null;
    });
  }
}
