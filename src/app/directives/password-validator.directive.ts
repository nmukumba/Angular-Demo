import {Attribute, Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective {

  constructor(@Attribute('appPasswordValidator') public PasswordControl: string) {
  }

  // tslint:disable-next-line:typedef
  validate(c: FormControl) {
    console.log('called pass');
    const Password = c.root.get(this.PasswordControl);
    const ConfirmPassword = c;

    if (ConfirmPassword.value === null) {
      return null;
    }

    if (Password) {
      const subscription: Subscription = Password.valueChanges.subscribe(() => {
        ConfirmPassword.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return Password && Password.value !== ConfirmPassword.value ? {passwordMatchError: true} : null;
  }


}
