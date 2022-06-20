import { Component, OnInit } from '@angular/core';
import { SwitchLoginService } from '../services/switch-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private modals: SwitchLoginService) { }
  ngOnInit(): void {
    
  }

  CloseLogin(){
    this.modals.$modal.emit(true);
  }
}