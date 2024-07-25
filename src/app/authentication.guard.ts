import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./services/user.service";

export const authenticationGuard: CanActivateFn = async (route, state) => {
  let service = inject(UserService);

  let user = await service.getUsername();

  if (user) return true;

  let router = inject(Router);
  router.navigate(["/"]);
  return false;
};
