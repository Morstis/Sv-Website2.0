import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[lwKlasseValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: KlasseValidationDirective,
      multi: true,
    },
  ],
})
export class KlasseValidationDirective implements Validator {
  constructor(private http: HttpClient) {
    this.http
      .get<string[]>('https://klassen.sv-hag.de/index.php')
      .pipe(take(1))
      .subscribe((res) => (this.klassen = res));
  }
  klassen: string[];
  // http request zu opossumts.net, um da die Klassenliste zu holen

  validate(c: FormControl): { klasseValid: { valid: boolean } } | null {
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
          valid: false,
        },
      };
    }
  }
}
