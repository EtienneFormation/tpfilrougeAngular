import {Component, OnInit} from '@angular/core';
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
export class HeaderComponent implements OnInit {
  title = "Carbon footprint";
  userName = "Etienne";

  constructor(private service : UserService) {}

  async ngOnInit() {
    this.userName = await this.service.getUsername();
  }
}
