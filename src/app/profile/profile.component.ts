import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  username = ""

  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let username = params.get('username');
      if (username)
        this.username = username;
    });
  }
}
