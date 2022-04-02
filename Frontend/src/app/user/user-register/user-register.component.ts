import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from 'src/app/errorState';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/sevices/users.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registraionForm: FormGroup;
   passwordMismatch :any;
  user: User;
  userSubmitted : boolean;

  constructor(private fb: FormBuilder,private userService : UsersService) {}

  ngOnInit() {
    this.registraionForm = this.fb.group(
      {
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        mobile: ['', [Validators.required, Validators.minLength(10)]],
      },
      {
        validator: PasswordValidator.confirmed("password", "confirmPassword"),
      }
    );
  }

  get f() {
    return this.registraionForm.controls;
  }

  get userName() {
    return this.registraionForm.get('userName') as FormControl;
  }
  get email() {
    return this.registraionForm.get('email') as FormControl;
  }
  get password() {
    return this.registraionForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registraionForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registraionForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registraionForm.value);
    this.userSubmitted = true;
    if(this.registraionForm.valid)
    {
     // this.user = Object.assign(this.user,this.registraionForm.value);
      this.userService.addUser(this.userData());
      this.registraionForm.reset();
      this.userSubmitted = false;
    }

  }

  userData():User{
    return this.user ={
      userName : this.userName.value,
      email : this.email.value,
      password :this.password.value,
      mobile : this.mobile.value
    }
  }
}
