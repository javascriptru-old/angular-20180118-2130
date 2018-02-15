import { FormControl } from '@angular/forms';

export class CustomValidation {
  static validateAge(age: number) {
    return function (ageControl: FormControl) {
      const currentYear = new Date().getFullYear();
      const birthDateYear = new Date(ageControl.value).getFullYear();

      if ((currentYear - birthDateYear) < age) {
        return {validateAge: {message: `Age should be more than ${age}`}};
      }

      return null;
    };
  }
}
