import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginOpen: boolean = true;
  constructor() { }
  ngOnInit(): void {
    
  }

  CloseLogin() {
     this.LoginOpen = false;
  }
}