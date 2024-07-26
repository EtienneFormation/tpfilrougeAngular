import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = "";

  constructor(private client : HttpClient) { }

  async login(user: User) {
    let users = await this.client.get<User[]>('http://10.50.101.6/users').toPromise();

    if (users) {
      let found = false;
      for (const current of users) {
        if (current.username === user.username && current.password === user.password)
          found = true;
      }
      if (found)
        this.user = user.username;
    }

  }

  async getUsername() {
    return new Promise<string>((resolve) => {
      resolve(this.user);
    });
  }

  async register(user : User) {
    return this.client.post('http://10.50.101.6/users', user, {headers: {'Content-Type': 'application/json'}}).toPromise();
  }
}
