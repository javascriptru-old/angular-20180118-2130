import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AppValidatorService } from '../../services/app-validator.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginControl: FormGroup;

  constructor(
    private _router: Router,
    private _appValidator: AppValidatorService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.loginControl = new FormGroup({
      email: new FormControl('', [Validators.required, this._appValidator.emailValidator()]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });

    // this.loginControl.valueChanges.subscribe((value) => console.log(value));
    this.loginControl.statusChanges.subscribe((status) => console.log(status));
  }

  logIn() {
    if(this._authService.isUserTrue(this.loginControl.controls.email.value, this.loginControl.controls.password.value)) {
      this._router.navigateByUrl('/mail');
    } else {
      alert('Не удается войти. Пожалуйста, проверьте правильность написания email и пароля.');
    }
  };
}
