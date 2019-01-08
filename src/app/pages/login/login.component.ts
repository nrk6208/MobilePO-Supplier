import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { LoginService } from './login.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {

  userForm: FormGroup;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'please enter your password',
      // 'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 1 character',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router,
    private service: LoginService,
    private authService: AuthService,
    private commonService: CommonService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  ngAfterContentInit() {
    this.authService.logout(true);
    this.commonService.spinner.hide();
    this.userForm.reset();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(2),
        Validators.maxLength(25)
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // if (!this.userForm) {
    //   return;
    // }
    // const form = this.userForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }
  login() {
    this.commonService.spinner.show();
        setTimeout(() => {
          this.service.login({
            'UserName': this.userForm.value.email,
            'Password': this.userForm.value.password
          }).subscribe((res) => {
            this.authService.saveLogindata(res);
          });
        });
  }
}

