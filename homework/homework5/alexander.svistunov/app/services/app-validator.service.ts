import { FormControl } from '@angular/forms';

export class AppValidatorService {

  emailValidator() {
    return function (formControl: FormControl) {
      const adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
      if(adrPattern.test(formControl.value) === false) {
        return { emailValidator: { message: 'Should provide a valid email'} };
      }
      return null;
    };
  }
}
