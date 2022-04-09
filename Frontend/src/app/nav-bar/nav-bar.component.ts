import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../sevices/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser :string;
  constructor(private alertyfy : AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedinUser = localStorage.getItem('token');
    console.log(this.loggedinUser);

    return  this.loggedinUser;
  }
  logout(){
    localStorage.removeItem('token');
    this.alertyfy.error("logged out")
  }
}
