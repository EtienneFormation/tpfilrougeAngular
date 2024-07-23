import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  author = "Etienne Cassin";
  creationDate = new Date("2024-07-22");
  today = new Date();
}
