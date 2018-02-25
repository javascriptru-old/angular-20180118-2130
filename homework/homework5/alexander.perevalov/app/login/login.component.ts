import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private _fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) {
    this.createForm();
  }

  public createForm() {
    this.form = this._fb.group({
      login: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {

    
  }

  public onSubmit() {
    if (this.form.valid) {
      this._auth.login();
      this._router.navigate(['messages']);
    }
  }
}
