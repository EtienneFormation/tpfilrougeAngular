import {Component, DoCheck} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {UserService} from "../services/user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    FormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {
  username = "";
  password = "";
  messages : string[] = [];

  constructor(private router : Router, private service : UserService) {
  }

  ngDoCheck() {
    this.checkForm();
  }

  checkForm() {
    this.messages = [];
    if (this.username.length < 3)
      this.messages.push("Le nom d'utilisateur doit faire 3 caractères ou plus.");
    if (this.password.length < 6)
      this.messages.push("Le mot de passe doit faire 6 caractères ou plus.");
  }

  async login() {
    this.checkForm();
    if (this.messages.length > 0) return;

    await this.service.login(this.username);
    this.router.navigate(['summary']);
  }
}
