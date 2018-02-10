import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public errors = {};
  public addUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sex: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required, birthDateValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private _usersService: UsersService) {
    const controls = this.addUserForm.controls;

    this.addUserForm.statusChanges(status => {
      
    })

    // как организовывать обработчики ошибок?
    // для каждого получается писать свой?
    // обработчики выносиьт в отдельный сервис скорее всего?
    // все ошибки formGroup можно записывать в formGroup или создавать отдельную переменную для обработанных ошибок, как у меня?
    // Еще возник доп вопрос, как вообще в ангуляре с мультиязычностью работают?
    controls.birthDate.statusChanges.subscribe(status => {
      if ('VALID' === status) {
        delete this.errors['birthDate'];
        return;
      }

      this.errors['birthDate'] = controls.birthDate.errors.birthDateValidator.message;
    })
    controls.firstName.statusChanges.subscribe(status => {
      if ('VALID' === status) {
        delete this.errors['firstName'];
        return;
      }

      if (controls.firstName.errors.minlength) {
        this.errors['firstName'] = `Минимальная длина ${controls.firstName.errors.minlength.requiredLength}`;
        return;
      }

      if (controls.firstName.errors.required) {
        this.errors['firstName'] = `Обязательное поле`;
        return;
      }
    });

    controls.lastName.statusChanges.subscribe(status => {
      if ('VALID' === status) {
        delete this.errors['lastName'];
        return;
      }

      if (controls.lastName.errors.minlength) {
        this.errors['lastName'] = `Минимальная длина ${controls.lastName.errors.minlength.requiredLength}`;
        return;
      }

      if (controls.lastName.errors.required) {
        this.errors['lastName'] = `Обязательное поле`;
        return;
      }
    });

    controls.sex.statusChanges.subscribe(status => {
      if ('VALID' === status) {
        delete this.errors['sex'];
        return;
      }

      if (controls.sex.errors.required) {
        this.errors['sex'] = `Обязательное поле`;
        return;
      }
    });

    controls.email.statusChanges.subscribe(status => {
      if ('VALID' === status) {
        delete this.errors['email'];
        return;
      }

      if (controls.email.errors.email) {
        this.errors['email'] = `Не валидный email`;
        return;
      }

      if (controls.email.errors.required) {
        this.errors['email'] = `Обязательное поле`;
        return;
      }
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }

    this._usersService.addUser(this.addUserForm.value);
    // Как reset-нуть formGroup?
    // Если сделать просто reset, то страница перезагружается
    // + до перезагрузки форма все-таки резетиться, но все поля становятся невалидными
    // и показывают ошибки валидыции.
    // Как их отключить?
    // this.addUserForm.reset()
  }

}

function birthDateValidator(formControl: FormControl) {
  const unixDate = (new Date(`${formControl.value} 00:00:00`)).getTime();
  const currentDate = new Date();
  const maxUnixDate = currentDate.setFullYear(currentDate.getFullYear() - 18);

  if (unixDate > maxUnixDate) {
    return { birthDateValidator: { message: 'Возраст должен быть 18+' } };
  }

  return null;
}