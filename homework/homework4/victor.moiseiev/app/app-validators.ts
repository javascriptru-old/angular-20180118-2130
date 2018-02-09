import { FormControl } from "@angular/forms";
export class AppValidators {

  public static email(control: FormControl): { [key: string]: any } {

    if (!control.value) { return null; }

    // tslint:disable-next-line:max-line-length
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const valueIsEmail = emailRegex.test(control.value);

    if (valueIsEmail) {
      return null;
    } else {
      return { email: { value: control.value } };
    }
  }

  public static olderThan18(control: FormControl): { [key: string]: any } {

    if (!control.value) { return null; }

    const birthday = +new Date(control.value);
    const age = Math.floor((Date.now() - birthday) / (24 * 3600 * 365.25 * 1000));

    if (age > 18) {
      return null;
    } else {
      return { olderThan18: { value: control.value } };
    }
  }
}
