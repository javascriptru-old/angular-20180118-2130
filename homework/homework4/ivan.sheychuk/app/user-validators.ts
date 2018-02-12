import { ValidatorFn, FormControl } from '@angular/forms';

export default class UserValidators {
    static ageLimitValidator(ageLimit: number): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            const today = new Date();
            const birthDate = new Date(control.value);
            const m = today.getMonth() - birthDate.getMonth();
            let age = today.getFullYear() - birthDate.getFullYear();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return ageLimit >= age ? { message: `The age should be more than ${age}` } : null;
        };
    }
}
