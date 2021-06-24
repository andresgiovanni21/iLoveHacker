import { Component } from '@angular/core';
import {InfoService} from "./info.service";
import {CardService} from "./card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfoService, CardService]
})
export class AppComponent {
  title = 'angular';

  nombre = '';
  nombreCard = '';
  franq = 1;
  clase = '';

}
