import { Component, OnInit } from '@angular/core';
import { ContactsService, IContact } from '../../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '../../validators';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private _contactsService: ContactsService, private _formBuilder: FormBuilder) { }

  public addContact(): void {
    this._contactsService.addContact(this._createContact());
    this.contactForm.reset();
  }

  private _createContact(): IContact {
    return {
      name: this.contactForm.controls.nameControl.value,
      surname: this.contactForm.controls.surnameControl.value,
      sex: (this.contactForm.controls.sexGroup as FormGroup).controls.sexControl.value,
      age: this.contactForm.controls.ageControl.value,
      email: this.contactForm.controls.emailControl.value,
    };
  }

  public ngOnInit() {
    this.contactForm = this._formBuilder.group({
      nameControl: ['', [Validators.required, Validators.minLength(2)]],
      surnameControl: ['', [Validators.required, Validators.minLength(2)]],
      sexGroup: this._formBuilder.group({
        sexControl: ['', Validators.required],
      }),
      ageControl: ['', CustomValidation.validateAge(18)],
      emailControl: ['', Validators.email],
    });
  }
}
