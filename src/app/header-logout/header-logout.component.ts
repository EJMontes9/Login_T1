import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent implements OnInit {
  LoginOpen:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  LoginOpenFunc(){
    this.LoginOpen = false;
  }

}

