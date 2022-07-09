import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwitchLoginService } from '../services/switch-login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  hide = false;
  constructor(private modals: SwitchLoginService,
    private fb: FormBuilder,
    private router:Router,
    private _snackBar: MatSnackBar) { 

      this.form = this.fb.group({
        usuario: ['',Validators.required],
        password: ['',Validators.required]
      });

    }
  ngOnInit(): void {
    
  }

  CloseLogin(){
    this.modals.$modal.emit(false);
  }

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario == 'admin' && password == 'admin'){
      this.router.navigate(['/UserLog']);
    }
    else{
      this.texterror();
    }

  }

  texterror(){
    this._snackBar.open("Usuario o contraseña incorrectos", "Cerrar", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2000,
      
    });
  }

}