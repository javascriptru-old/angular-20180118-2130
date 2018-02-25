import {FormControl} from '@angular/forms';

export class CustomValidators {

  public static validatorElder18(formControl: FormControl) {
    const dateBirth = new Date(formControl.value.toString());
    const ageDifMs = Date.now() - dateBirth.getTime();
    const age = Math.floor((ageDifMs / 31557600000 ));

    if ( age < 18 ) {
      return  {validatorElder18 : {message: 'should be elder 18'}};
    }
    return null;

  }
}
