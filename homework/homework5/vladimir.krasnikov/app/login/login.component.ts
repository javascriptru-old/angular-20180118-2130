import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  private password: string;
  public isAuthenticated: boolean;
  public errorMsg: string;

   // User Add Form Group
   public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private location: Location, private router: Router) {
    this.createForm();
    this.errorMsg = '';
  }

  public createForm() {
    this.loginForm = this.formBuilder.group({
     userName: ['', [Validators.required, Validators.minLength(2)]],
     password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public signIn() {
    const formModel = this.loginForm.value;
    this.userName = formModel.userName;
    this.password = formModel.password;
    this.isAuthenticated = this.loginService.signIn(this.userName, this.password);
    this.router.navigate(['/inbox']);
  }

  public signOut() {
    this.isAuthenticated = this.loginService.signOut();
  }

  ngOnInit() {
    this.isAuthenticated = this.loginService.isAuthenticated;
    this.userName = this.loginService.userName;
  }


  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.signIn();
    } else if (this.loginForm.get('password').valid) {
      this.errorMsg = 'Please, provide username at least 2 characters long!';
    } else { this.errorMsg = 'The minimal password length is 4 characters!';
    }
 }
}

