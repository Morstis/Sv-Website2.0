import { Directive } from '@angular/core';
import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[morsEmailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true
    }
  ]
})
export class EmailValidationDirective implements Validator {
  validate(c: FormControl): { [key: string]: { valid: boolean } } | null {
    // prettier-ignore
    const check: RegExp = new RegExp('[a-z]+\.[a-z]+@hag-iserv.de$');
    if (!c.value || c.value === '' || check.test(c.value)) {
      return null;
    }

    return {
      emailValid: {
        valid: false
      }
    };
  }
}
