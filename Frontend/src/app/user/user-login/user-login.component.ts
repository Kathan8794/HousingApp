import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertifyService } from 'src/app/sevices/alertify.service';
import { AuthService } from 'src/app/sevices/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router :Router
  ) {}

  ngOnInit() {}
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.router.navigate(['/']);
      this.alertify.success('login successful');
    } else {
      this.alertify.error('login not successful');
    }
  }
}
