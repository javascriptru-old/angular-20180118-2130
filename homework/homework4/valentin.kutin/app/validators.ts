import { FormControl } from '@angular/forms';

export function AgeValidator(formControl: FormControl) {
  if (!formControl.value) {
    return { ageValidator: { message: 'Age is not found' }};
  }

  const birthDate = new Date(formControl.value).getTime();

  if (birthDate < 0) {
    return { ageValidator: { message: 'Year is not valid' }};
  }

  const ageDifference = new Date(Date.now() - birthDate);
  const age = Math.abs(ageDifference.getFullYear() - 1970);

  if (age < 18) {
    return { ageValidator: { message: 'Age is not valid' }};
  }

  return null;
}
