import { Component, OnInit } from '@angular/core';
import { SwitchLoginService } from '../services/switch-login.service';


@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent implements OnInit {
  LoginOpen:boolean = true;

  constructor(private modal:SwitchLoginService,
    private HeaderLoging:SwitchLoginService) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor)=>{this.LoginOpen = valor});
  }

  LoginOpenFunc(){
    this.LoginOpen = false;
  }

}

