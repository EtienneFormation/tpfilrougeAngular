import { Routes } from '@angular/router';
import {SummaryComponent} from "./summary/summary.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {authenticationGuard} from "./authentication.guard";

export const routes: Routes = [
  {path: 'summary', component: SummaryComponent, canActivate : [authenticationGuard]},
  {path: 'profile/:user', component: ProfileComponent, canActivate : [authenticationGuard]},
  {path : '**', component: HomeComponent}
];
