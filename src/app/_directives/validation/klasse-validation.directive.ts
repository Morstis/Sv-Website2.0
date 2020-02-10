import { Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { tap } from 'rxjs/internal/operators';
import { Subscription, Observable } from 'rxjs';

@Directive({
  selector: '[morsKlasseValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: KlasseValidationDirective,
      multi: true
    }
  ]
})
export class KlasseValidationDirective implements Validator {
  constructor(private http: HttpClient) {}
  klassen: string[];
  // http request zu opossumts.net, um da die Klassenliste zu holen
  opossum: Subscription = this.http
    .get<string[]>(
      'https://api.opossum.media/public/mobileapps/hag/KlassenListe.php'
    )
    .subscribe(res => (this.klassen = res));

  validate(c: FormControl): { [key: string]: { valid: boolean } } | null {
    // prüft, ob die value gesetzt oder leer ist

    if (!c.value || c.value === '') {
      return null;
    } else {
      for (const item in this.klassen) {
        if (this.klassen[item].toUpperCase() === c.value.toUpperCase()) {
          return null;
        }
      }

      return {
        klasseValid: {
          valid: false
        }
      };
    }
  }
}
