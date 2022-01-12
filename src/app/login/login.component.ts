import { Component, OnInit } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public codes = ['US +44', 'AU +99', 'IN +91', 'UK +11'];
  userModel = new User('',);
  constructor() { }

  ngOnInit(): void {
  }

}
