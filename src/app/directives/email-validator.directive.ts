import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.emailValidator();
  }

  // tslint:disable-next-line:typedef
  validate(c: FormControl) {
    return this.validator(c);
  }

  emailValidator(): ValidatorFn {
    // @ts-ignore
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        const isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
        if (isValid) {
          return null;
        } else {
          return {
            emailValidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }

}
