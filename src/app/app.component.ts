import { Component, Input } from '@angular/core';
import {Info} from "./core/models/info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  s_exp = 1;
  nombre = '';

  recInfo(info: Info) {
    this.s_exp = info.numero;
    this.nombre = info.nombre;
  }
  recInfo2($event) {
    this.s_exp = $event;

  }
}
