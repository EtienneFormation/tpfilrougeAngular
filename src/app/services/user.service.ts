import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = "";

  constructor() { }

  async login(user: string) {
    this.user = user;
  }

  async getUsername() {
    return new Promise<string>((resolve) => {
      resolve(this.user);
    });
  }
}
