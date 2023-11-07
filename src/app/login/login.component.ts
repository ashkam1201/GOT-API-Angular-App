import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  private formSubmitAttempt?: boolean;
  emailSupport = "mailto:lkaing@openwt.com?subject=problem with login&body=https://www.youtube.com/watch?v=RvZSV5wqoMw&ab_channel=PatrickS%C3%A9bastien";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    }

  isFieldInvalid(field: string) {
    return (
      (!this.form?.get(field)?.valid && this.form!.get(field)?.touched) ||
      (this.form?.get(field)?.untouched && this.formSubmitAttempt) ||
      (this.form?.get(field)?.value != null && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form!.valid) {
      this.authService.login(this.form?.value);
      this.router.navigate(['/'])
    }
    this.formSubmitAttempt = true;
  }
}
