import { Component, OnInit } from '@angular/core';
import { SwitchLoginService } from '../services/switch-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  

  constructor(private HeaderLoging:SwitchLoginService,
    private router:Router) { }

  ngOnInit(): void {
  }

  LogoutFunc(){
    alert("Sesión Cerrada");
    this.router.navigate(['/Home']);
  }

  
}
