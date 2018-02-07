import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CardService } from '../../card.service';
import { CardlistComponent } from '../cardlist.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
  nameControl: FormControl;
  surnameControl: FormControl;
  genderControl: FormControl;
  dateControl: FormControl;
  emailControl: FormControl;

  today = new Date();

  constructor(private _cardService: CardService,
              private _cardListComponent: CardlistComponent) {
              }

  ngOnInit() {
    this.nameControl = new FormControl('Jane', [Validators.required, Validators.minLength(2)]);
    this.nameControl.valueChanges.subscribe( (value) => console.log(value) );
    this.nameControl.statusChanges.subscribe( (status) => {
                                    console.log( this.nameControl.errors );
                                    console.log( status )} );

    this.surnameControl = new FormControl('Doe', [Validators.required, Validators.minLength(2)]);
    this.surnameControl.valueChanges.subscribe( (value) => console.log(value) );
    this.surnameControl.statusChanges.subscribe( (status) => {
                                      console.log( this.surnameControl.errors );
                                      console.log( status )} );

    this.genderControl = new FormControl('F', [Validators.required, genderValidator] );
    this.genderControl.valueChanges.subscribe( (value) => console.log(value) );
    this.genderControl.statusChanges.subscribe( (status) => {
                                      console.log( this.genderControl.errors );
                                      console.log( status )} );

    this.dateControl = new FormControl(this.today, [Validators.required, dateValidator] );
    this.dateControl.valueChanges.subscribe( (value) => console.log(value) );
    this.dateControl.statusChanges.subscribe( (status) => {
                                      console.log( this.dateControl.errors );
                                      console.log( status )} );

    this.emailControl = new FormControl('janedoe@gmail.com', [Validators.required, Validators.minLength(6), emailValidator] );
    this.emailControl.valueChanges.subscribe( (value) => console.log(value) );
    this.emailControl.statusChanges.subscribe( (status) => {
                                      console.log( this.dateControl.errors );
                                      console.log( status )} );
  }

  addCard(name: string, surname: string, gender: string, birthday: Date, email: string) {
    // add card to the online repository via service
    if (  this.nameControl.invalid ||
          this.surnameControl.invalid ||
          this.genderControl.invalid ||
          this.dateControl.invalid ||
          this.emailControl.invalid ) {
      this.nameControl.markAsTouched();
      this.surnameControl.markAsTouched();
      this.genderControl.markAsTouched();
      this.dateControl.markAsTouched();
      this.emailControl.markAsTouched();
      return;
    }

    let bDate = new Date(birthday);
    this._cardService.addCard( name, surname, gender, bDate, email ).subscribe(
                      users => {
                        console.log("success" + users);
                        this._cardListComponent.ngOnInit();
                      },
                      error => {
                        console.log("error " + error);
                      });
  }
  
}

function genderValidator( formControl: FormControl ) {
  if ( formControl.value !== 'M' && formControl.value !== 'F' && formControl.value !== 'm' && formControl.value !== 'f' ) {
    return { genderValidator: {message: "Gender must be 'F' or 'M' "} }
  }
  return null;
}

function dateValidator( formControl: FormControl ) {
  let curDate = new Date();
  let inDate = new Date(formControl.value);
  let ageYears = curDate.getFullYear() - inDate.getFullYear();
  let ageMonths = curDate.getMonth() - inDate.getMonth();
  let strError = "The age must be greater than 18 years";

  if ( ageYears < 18 ) {
    return { dateValidator: {message: strError} }
  } else 
    if ( ageYears === 18 ) {
      if ( ageMonths < 0 ) {
        return { dateValidator: {message: strError} }
      } else 
        if ( ageMonths === 0 ) {
          if ( !(curDate.getDate() - inDate.getDate() >= 0) ) {
            return { dateValidator: {message: strError} }
          }
        }
    }
  return null;
}

function emailValidator( formControl: FormControl ) {
  if ( formControl.value.indexOf("@") === -1 ) {
    return { emailValidator: {message: "E-mail must have a sign '@' in address"} }
  }
  return null;
}