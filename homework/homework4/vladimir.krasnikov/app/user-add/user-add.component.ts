import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { NewUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent  {

  @Output() formHidden: EventEmitter<boolean> = new EventEmitter();

  // User Add Form Group
  public userAddForm: FormGroup;
 // Gender list (for select control)
  public genders: string[] = ['M', 'F'];


  public errorMsg: string;

  private newUser: NewUser;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
      this.createForm();
      this.errorMsg = '';
    }

   // Initialize form with FormBuilder
   public createForm() {
     this.userAddForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(2)],
      lastName: ['', Validators.minLength(2)],
      gender: ['', Validators.required],
      birthdate: ['', [Validators.required, this.dobValidator]],
      email: ['', Validators.email]
     });
   }

   // Date of birth validator
   dobValidator(formControl: FormControl) {
    const birthday = new Date(formControl.value);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    const ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);

    if ( ageYears < 18  ) {
        return { dobValidator: {message: 'The minimal age is 18 years!'} };
      }
        return null;
     }

     // Hide Form (send event to the parent form)
     hideForm() {
      this.formHidden.emit(true);
   }


    onSubmit() {
      if (this.userAddForm.status === 'VALID') {
        this.newUser = this.getNewUser();
        this.userService.addUser(this.newUser).subscribe();
        // Some times the main list is not up to date ???
        // onInit wors before the data is posted ???
        this.hideForm();
      } else if (this.userAddForm.get('birthdate').valid) {
        this.errorMsg = 'Please, complete the form!'; } else { this.errorMsg = 'The minimal age is 18 years!'; }
   }

   getNewUser(): NewUser {
      const formModel = this.userAddForm.value;
      const formUser: NewUser = {
       fullName: (formModel.firstName as string) + ' ' +  (formModel.lastName as string),
       email: formModel.email as string,
       birthdate: formModel.birthdate as string,
       gender: formModel.gender as string,
       avatarUrl: 'http://localhost:4200/assets/img/blank-profile.jpg',
       address: ''
     };
     return formUser;
   }
}
