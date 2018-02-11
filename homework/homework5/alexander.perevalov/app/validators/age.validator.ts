import { FormControl } from '@angular/forms'

export function AgeValidator(ctrl: FormControl) {
    let birthYear = new Date(ctrl.value).getFullYear();
    let now = new Date().getFullYear();

    if ((now - birthYear) < 18) {
        return { AgeValidator: { message: 'Вам нет 18ти лет' } };
    }

    return null;
}