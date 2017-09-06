import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HelloComponent} from "./hello/hello.component";
export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  }
];
