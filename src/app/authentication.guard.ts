import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./services/user.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  let service = inject(UserService);
  if (service.username) return true;

  let router = inject(Router);
  router.navigate(["/"]);
  return false;
};
