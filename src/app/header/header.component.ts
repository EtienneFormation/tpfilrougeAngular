import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "Carbon footprint";
  userName = "Etienne";

  constructor(service : UserService) {
    this.userName = service.username;
  }
}
