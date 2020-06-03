import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[lwCompareWith]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareWithDirective,
      multi: true,
    },
  ],
})
export class CompareWithDirective implements Validator {
  @Input() lwCompareWith: { control: string; operator: string };

  validate(c: AbstractControl): { compareWith: { valid: boolean } } | null {
    const controlToCompare = c.parent.get(this.lwCompareWith.control);

    if (
      !c.value ||
      c.value === '' ||
      !controlToCompare.value ||
      controlToCompare.value === ''
    ) {
      return null;
    } else {
      if (this.evaluation(c.value, controlToCompare.value)) {
        controlToCompare.setErrors(null);
        return null;
      }

      return {
        compareWith: {
          valid: false,
        },
      };
    }
  }

  private evaluation(param1: any, param2: any) {
    switch (this.lwCompareWith.operator) {
      case '+':
        return param1 + param2;
      case '-':
        return param1 - param2;
      case '*':
        return param1 * param2;
      case '/':
        return param1 / param2;
      case '<':
        return param1 < param2;
      case '>':
        return param1 > param2;
      case '<=':
        return param1.index <= param2.index;
      case '>=':
        return param1.index >= param2.index;
      case '===':
        return param1 === param2;
    }
  }
}
