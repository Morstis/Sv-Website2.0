import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[lwEmailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true,
    },
  ],
})
export class EmailValidationDirective implements Validator {
  validate(c: FormControl): { emailValid: { valid: boolean } } | null {
    // prettier-ignore
    const check: RegExp = new RegExp('[a-z]+\.[a-z]+@hag-iserv\.de$');
    if (!c.value || c.value === '' || check.test(c.value)) {
      return null;
    }

    return {
      emailValid: {
        valid: false,
      },
    };
  }
}
