import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderLogoutComponent } from './header-logout/header-logout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'',component:HeaderLogoutComponent },
  { path:'UserLog',component:HeaderLoginComponent },
  { path:'Home',component:HeaderLogoutComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
