import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[morsCompareWith]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareWithDirective,
      multi: true
    }
  ]
})
export class CompareWithDirective implements Validator {
  @Input() morsCompareWith: { control: string; operator: string };
  validate(
    control: AbstractControl
  ): { evalationFailed: boolean; operator: string } | null {
    const controlToCompare = control.parent.get(this.morsCompareWith.control);

    try {
      if (
        controlToCompare &&
        this.evaluation(controlToCompare.value.index, control.value.index)
      ) {
        return {
          evalationFailed: true,
          operator: this.morsCompareWith.operator
        };
      }
      return null;
    } catch (e) {
      // Fehler ist nicht irrelavant
    }
  }

  private evaluation(param1: any, param2: any) {
    switch (this.morsCompareWith.operator) {
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
      case '===':
        return param1 === param2;
    }
  }
}
