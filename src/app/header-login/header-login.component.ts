import { Component, OnInit } from '@angular/core';
import { SwitchLoginService } from '../services/switch-login.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  LoginUser:boolean = false;

  constructor(private HeaderLoging:SwitchLoginService) { }

  ngOnInit(): void {
  }

  
}
